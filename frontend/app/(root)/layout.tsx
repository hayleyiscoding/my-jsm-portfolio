import type { Metadata } from "next";

import "../globals.css";
import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import BackToTopButton from "@/components/BackToTopButton";

export const metadata: Metadata = {
  title: "Portfolio - Hayley Wood",
  description: "The software developer portfolio of Hayley Wood.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className='dark:bg-custom-black bg-custom-red'>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
          <NavBar />
          <BackToTopButton />
          <main className='container'>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
