import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

import { SiteHeader } from "@/shared/components/site-header";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Portal de Monitorias",
    template: "%s | Portal de Monitorias",
  },
  description: "Consulte os horarios de monitoria de Ciencia da Computacao.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
