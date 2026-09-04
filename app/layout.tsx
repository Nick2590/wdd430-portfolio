import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nicholas Goodsell | WDD 430 Portfolio",
  description: "Portfolio and coursework for WDD 430.",
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