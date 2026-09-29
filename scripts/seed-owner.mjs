import { sql } from '@vercel/postgres';
import bcrypt from 'bcryptjs';
import { z } from 'zod';

const ownerCredentials = z
  .object({
    email: z.string().trim().email(),
    password: z.string().min(6),
  })
  .safeParse({
    email: process.env.OWNER_EMAIL,
    password: process.env.OWNER_PASSWORD,
  });

if (!ownerCredentials.success) {
  console.error(
    'Set OWNER_EMAIL to a valid email and OWNER_PASSWORD to at least 6 characters in .env.local.'
  );
  process.exitCode = 1;
} else {
  try {
    const email = ownerCredentials.data.email.toLowerCase();
    const passwordHash = await bcrypt.hash(ownerCredentials.data.password, 12);
    const { rows } = await sql`
      INSERT INTO users (id, email, password_hash)
      VALUES (1, ${email}, ${passwordHash})
      ON CONFLICT (id) DO UPDATE
      SET password_hash = EXCLUDED.password_hash
      WHERE users.email = EXCLUDED.email
      RETURNING id
    `;

    if (rows.length === 0) {
      console.error(
        'A different owner email is already seeded; no account was changed.'
      );
      process.exitCode = 1;
    } else {
      console.info('Portfolio owner account seeded.');
    }
  } catch {
    console.error(
      'Owner seeding failed. Check the Postgres connection and apply database/schema.sql.'
    );
    process.exitCode = 1;
  }
}