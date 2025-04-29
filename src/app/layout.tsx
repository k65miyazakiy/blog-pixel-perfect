import { Metadata } from "next";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import "./globals.css";
import "./lib/fontawesome";

import { Noto_Sans } from "next/font/google";
const NotoSans = Noto_Sans({ weight: "400", subsets: ["latin"] });

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
      <body className={NotoSans.className}>
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
