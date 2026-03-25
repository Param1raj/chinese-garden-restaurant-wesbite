import type { Metadata } from "next";
import { Noto_Serif_SC, DM_Sans, Geist } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const noto = Noto_Serif_SC({ subsets: ["latin"] });
const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chinese Garden",
  description: "A refined restaurant landing page for Chinese Garden, celebrating authentic cuisine, warm hospitality, and elegant dining.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", dmSans.className, noto.className, "font-sans", geist.variable)}
    >
      <body className="min-h-full">
        <ThemeProvider>
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
