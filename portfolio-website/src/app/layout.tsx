import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sam's Portfolio Website",
  description: "A website to get to know Sam.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-gradient-to-r from-slate-400 via-slate-300
		to-slate-400" lang="en">
      <body className={inter.className}>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <div className="flex items-center justify-center">
            {children}
          </div>
        </Suspense>
        
        <Footer />
      </body>
    </html>
  );
}
