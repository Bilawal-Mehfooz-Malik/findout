import type { Metadata } from "next";
import "@/app/globals.css";
import AppBar from "@/app/ui/AppBar";
import { geistMono, inter } from "@/app/lib/fonts";
import { ThemeProvider } from "../components/theme-provider";

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
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className={`${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AppBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
