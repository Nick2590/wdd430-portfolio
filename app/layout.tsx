import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://wdd430-portfolio-nick-1fb1.vercel.app"),
  title: {
    default: "Nicholas Goodsell | Project Portfolio",
    template: "%s | Project Portfolio",
  },
  description: "A portfolio of web development projects by Nicholas Goodsell.",
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Nicholas Goodsell | Project Portfolio",
    title: "Nicholas Goodsell | Project Portfolio",
    description: "A portfolio of web development projects by Nicholas Goodsell.",
  },
  twitter: {
    card: "summary",
    title: "Nicholas Goodsell | Project Portfolio",
    description: "A portfolio of web development projects by Nicholas Goodsell.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
        <Header />
        <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}