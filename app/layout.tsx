// app/layout.tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ProviderWrapper from './ProviderWrapper';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"; // Import your Footer component


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Sufi Restro",
  description: "Authentic dining experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className="antialiased flex flex-col min-h-screen">
        <ProviderWrapper>
          <Navbar/>
          <main className="flex-grow">
            {children}
   
          </main>
          <Footer />
        </ProviderWrapper>
      </body>
    </html>
  );
}