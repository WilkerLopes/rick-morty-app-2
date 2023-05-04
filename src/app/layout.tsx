"use client";

import { CssBaseline } from "@nextui-org/react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Manrope, Space_Grotesk } from "next/font/google";

import "@/styles/variables.scss";
import "@/styles/globals.scss";
import "@/styles/font.scss";
import Head from "next/head";
import { Providers } from "./providers";

const manrope = Manrope({
  variable: "--font-manrope",
  weight: ["400", "700", "800"],
  subsets: ["latin"],
});
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    template: "%s | RickMorty",
    absolute: "RickMorty",
  },
  description: "dex para RickMorty",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <Head>{CssBaseline.flush()}</Head>
      <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
