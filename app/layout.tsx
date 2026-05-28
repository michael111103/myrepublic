import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MyRepublic | Internet Fiber Ultra Cepat",
  description: "Sales resmi MyRepublic. Internet fiber optik ultra cepat, unlimited, stabil untuk streaming, gaming, dan work from home. Daftar sekarang!",
  keywords: "myrepublic, internet fiber, wifi cepat, langganan internet",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className="noise antialiased">
        {children}
      </body>
    </html>
  );
}
