import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { EmployeeProvider } from "@/app/context/EmployeeContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "HRNet",
  description: "HRNet - Human Ressources",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <EmployeeProvider>{children}</EmployeeProvider>
      </body>
    </html>
  );
}
