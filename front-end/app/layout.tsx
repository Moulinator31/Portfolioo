import Script from "next/script";
import type { Metadata } from "next";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Le Monde Digital d'Elsa",
  description: "Explorez le portfolio digital d'Elsa : intégration web et design moderne.",
  keywords: ["intégrateur web", "portfolio", "Elsa", "développement web"],
  openGraph: {
    title: "Le Monde Digital d'Elsa",
    description: "Explorez le portfolio digital d'Elsa : intégration web et design moderne.",
    url: "https://votre-site.com", // Mettez votre URL ici
    siteName: "Le Monde Digital d'Elsa",
    images: [
      {
        url: "https://votre-site.com/image-de-votre-portfolio.png", // Remplacez par une image d'aperçu
        width: 1200,
        height: 630,
        alt: "Le Monde Digital d'Elsa",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Petit+Formal+Script&family=Raleway:wght@100..900&display=swap');
        </style>
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-W41JN60E2V"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-W41JN60E2V');
          `}
        </Script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}


