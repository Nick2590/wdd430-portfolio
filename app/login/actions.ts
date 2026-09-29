'use server';

import { AuthError } from 'next-auth';
import { signIn } from '@/auth';

export type AuthenticateState = string | undefined;

export async function authenticate(
  _previousState: AuthenticateState,
  formData: FormData
): Promise<AuthenticateState> {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      if (error.type === 'CredentialsSignin') {
        return 'Invalid email or password.';
      }

      return 'Something went wrong.';
    }

    throw error;
  }

  return undefined;
}