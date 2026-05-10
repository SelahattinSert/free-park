import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { LangProvider } from "@/context/LangContext";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
  title: "Free Park | Akıllı Otopark Bariyeri",
  description: "Free Park ile otopark bariyerinizi telefonunuzdan, her yerden kontrol edin. Kodsuz kurulum, anlık bağlantı.",
  openGraph: {
    images: ["/og-image.jpg"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <ThemeProvider>
          <LangProvider>
            <Navbar />
            <main className="flex-grow pt-[80px]">
              {children}
            </main>
            <Footer />
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}