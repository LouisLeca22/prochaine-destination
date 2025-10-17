import type { Metadata } from "next";
import { Josefin_Sans, Inter } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider"
import Menu from "@/components/Menu/Menu";
import { getScopedI18n } from "@/locales/server";

import "./globals.css";
import { LocaleProvider } from "@/providers/locale-provider";


const josefin_sans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getScopedI18n("Metadata");

  return {
    title: t('title'),
    description: t('description'),
  };
}


export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>
}>) {

  const { locale } = await params

  return (
    <html lang="en">
      <body
        className={`${josefin_sans.variable} ${inter.variable} font-josefin-sans antialiased`}
      >
        <LocaleProvider locale={locale}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <Menu />
            {children}
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
