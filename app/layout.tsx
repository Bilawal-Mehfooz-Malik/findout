import type { Metadata } from "next";
import "./globals.css";
import AppBar from "@/app/ui/AppBar";
import { geistMono, inter } from "@/app/lib/fonts";


export const metadata: Metadata = {
  title: "FindOut",
  description: "Discover food and residences around you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${geistMono.variable} antialiased`}>
        <AppBar />
        {children}
      </body>
    </html>
  );
}

