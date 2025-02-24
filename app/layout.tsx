import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./ui/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>WARP7 Scouting App</title>
      </head>
      <body
        className={`flex flex-col min-h-dvh ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <div className="overflow-y-scroll">
              {children}
          </div>
          <div className="absolute bottom-0 w-full">
              <NavBar />
          </div>
      </body>
    </html>
  );
}
