import { Inter, Poppins, Geist_Mono } from "next/font/google";

// Primary UI font
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Headings / Cards font
export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "700"], 
});

// Code / IDs
export const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});
