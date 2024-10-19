import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import "./globals.css";

import { Noto_Sans } from "next/font/google";
const NotoSans = Noto_Sans({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
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
