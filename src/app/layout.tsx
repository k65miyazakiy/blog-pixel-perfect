import { Metadata } from "next";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import "./globals.css";
import "./lib/fontawesome";

import { JetBrains_Mono } from "next/font/google";
const JetBrainsMono = JetBrains_Mono({ weight: ["400", "500", "600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pixel Perfect",
  description: "A technical blog about web development and more",
  icons: {
    icon: "/pixel-p-modified.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/pixel-p-modified.svg" type="image/svg+xml" />
      </head>
      <body className={JetBrainsMono.className}>
        <div id="flex-container" className="flex min-h-screen flex-col">
          <Header />
          <div id="expansible-content-container" className="flex-1">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
