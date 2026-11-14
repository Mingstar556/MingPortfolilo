import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono, Inter_Tight } from "next/font/google";
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

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#0A2540",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mingstar.site"),
  title: "Ming Star | Freelance Web Developer & Full-Stack Engineer",
  description:
    "Official portfolio of Ming Star. Independent freelance web developer engineering high-performance web applications, interactive 3D web experiences, and scalable digital platforms.",
  keywords: [
    "Ming Star",
    "Freelance Web Developer",
    "Full-Stack Web Developer",
    "Next.js Developer",
    "React Developer",
    "Three.js 3D Web",
    "TypeScript",
    "Tailwind CSS",
    "Web Application Development",
    "Commercial Web Development",
  ],
  authors: [{ name: "Ming Star" }],
  openGraph: {
    title: "Ming Star | Freelance Web Developer & Full-Stack Engineer",
    description: "Independent freelance web developer engineering high-performance web applications & interactive digital platforms.",
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
      className={`${spaceGrotesk.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} ${interTight.variable} scroll-smooth antialiased`}
    >
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </head>
      <body className="min-h-screen bg-[#FBFCFD] text-[#0A2540] font-sans selection:bg-[#F59E0B] selection:text-[#0A2540]">
        {children}
      </body>
    </html>
  );
}
