import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
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
