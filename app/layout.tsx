import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MyRepublic Bandung | Internet Fiber Ultra Cepat",
  description: "Sales resmi MyRepublic Bandung. Internet fiber optik ultra cepat, unlimited, stabil untuk streaming, gaming, dan work from home. Daftar sekarang!",
  keywords: "myrepublic bandung, internet fiber bandung, wifi cepat bandung, langganan internet bandung",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="noise antialiased">
        {children}
      </body>
    </html>
  );
}
