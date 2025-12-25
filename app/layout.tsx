import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "సహస్రచండి మరియు శివ సహస్రనామ మహాయజ్ఞం",
  description: "జగన్మాత అమ్మవారి మరియు పరమేశ్వరుని దివ్య ఆశీర్వాదాల కోసం నిర్వహించబడే పవిత్ర వైదిక యజ్ఞం.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="te">
      <body>
        {children}
      </body>
    </html>
  );
}
