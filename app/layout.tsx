import type { Metadata } from "next";
import { Josefin_Sans, Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"

import "./globals.css";

const josefin_sans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prochaine destination",
  description: "Explorez votre prochaine destination, une lieu paisible où nature, gastronomie et traditions se rencontrent pour un séjour inoubliable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefin_sans.variable} ${inter.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
