import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { Suspense } from "react";
import { Head } from "next/document";

const inter = Inter({ subsets: ["latin"] });

const GOOGLE_TRACKING_ID = process.env.GOOGLE_TRACKING_ID as string;

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
      <Head>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TRACKING_ID}`}></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());

        gtag('config', GOOGLE_TRACKING_ID);
      </script>
      </Head>
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
