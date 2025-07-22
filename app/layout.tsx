// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import ProviderWrapper from "./ProviderWrapper";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

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
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen font-sans">
        <ProviderWrapper>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ProviderWrapper>
      </body>
    </html>
  );
}
