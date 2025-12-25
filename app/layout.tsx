import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sahasra Chandi & Shiva Sahasranama Maha Yajna",
  description: "A sacred Vedic ceremony invoking divine blessings through the recitation of one thousand praises to the Divine Mother and Lord Shiva.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
