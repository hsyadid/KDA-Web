import type { Metadata } from "next";
import './globals.css'
import Navbar from "@/components/elements/Navbar";
import Footer from "@/components/elements/Footer";

export const metadata: Metadata = {
  title: "PT KARYA DIMENSI NUGRAHA",
  description: "PT KARYA DIMENSI NUGRAHA official website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-default text-white flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}


