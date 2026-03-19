import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { SpeedInsights } from '@vercel/speed-insights/next';

const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://attentostudios.com.br'),
  title: {
    default: "Attento | Estética Automotiva Premium",
    template: "%s | Attento Estética Automotiva",
  },
  description: "Tratamentos que Redefinem Brilho e Proteção. A arte da perfeição automotiva, vitrificação, polimento e PPF.",
  keywords: ["estética automotiva", "vitrificação", "PPF", "polimento", "lavagem detalhada", "películas", "premium"],
  openGraph: {
    title: "Attento | Estética Automotiva Premium",
    description: "A arte da perfeição automotiva. Elevamos o padrão estético do seu veículo.",
    url: "/",
    siteName: "Attento Estética",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Attento | Estética Automotiva",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
        <SpeedInsights />
      </body>
    </html>
  );
}
