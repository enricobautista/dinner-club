import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { EB_Garamond, Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Break Bread Dinner Club",
  description: "Simple, classy dinner menus and recipes",
};

const garamond = EB_Garamond({ subsets: ["latin"], weight: ["400", "600"] });
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={`menu-card menu-container ${garamond.className}`}>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
