import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import dynamic from "next/dynamic";

const Footer = dynamic(()=>import("@/components/layout/Footer"))
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: "US Metal services",
  description: "US Metal Services offers custom metalwork solutions for residential and commercial projects. Explore our services for gates, railings, staircases, and more.",
    keywords: "metalwork, custom gates, railings, staircases, metal fabrication, US Metal Services"

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
        <link rel="icon" href="/favicon.ico" sizes="any"/>
    </head>
    <body className='font-sans'>
    <Navbar/>
      {children}
      <Footer/>
    <SpeedInsights />
    <Analytics/>

    </body>
    </html>
  );
}
