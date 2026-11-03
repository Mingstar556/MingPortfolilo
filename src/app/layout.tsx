import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const viewport: Viewport = {
  themeColor: "#0A2540",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mingportfolilo.com"),
  title: "Ming Star | Full-Stack Web Developer & Content Creator",
  description:
    "Official portfolio of Ming Star. Crafting high-performance web applications, interactive 3D experiences, and tech media content.",
  keywords: [
    "Ming Star",
    "Full-Stack Developer",
    "Content Creator",
    "Next.js",
    "Three.js",
    "GSAP",
    "TypeScript",
    "Tailwind CSS",
  ],
  authors: [{ name: "Ming Star" }],
  openGraph: {
    title: "Ming Star | Full-Stack Web Developer & Content Creator",
    description: "Crafting high-performance web applications & tech content.",
    images: ["/assets/ming-cutout.webp"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} scroll-smooth antialiased`}
    >
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#FBFCFD] text-[#0A2540] font-sans selection:bg-[#F59E0B] selection:text-[#0A2540]">
        {children}
      </body>
    </html>
  );
}
