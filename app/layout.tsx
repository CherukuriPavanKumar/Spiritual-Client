import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Analytics from "./Analytics";

export const metadata: Metadata = {
  title: "సహస్రచండి మరియు శివ దశసహస్రనామ మహాయజ్ఞం",
  description:
    "జగన్మాత అమ్మవారి మరియు పరమేశ్వరుని దివ్య ఆశీర్వాదాల కోసం నిర్వహించబడే పవిత్ర వైదిక యజ్ఞం.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="te">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-H7H4Y59F54"
          strategy="afterInteractive"
        />

        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H7H4Y59F54', { send_page_view: false });
          `}
        </Script>
      </head>

      <body>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
