import type { Metadata } from "next";
import { Anton, Bangers, Inter, Caveat } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Loader from "@/components/Loader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const bangers = Bangers({
  variable: "--font-bangers",
  weight: "400",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "yuukis super cool portfolio",
  metadataBase: new URL("https://yuukisnoob.dev"),
  openGraph: {
    title: "yuukis super cool portfolio",
    type: "website",
    url: "https://yuukisnoob.dev",
  },
  twitter: {
    card: "summary",
    title: "yuukis super cool portfolio",
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
      className={`${inter.variable} ${anton.variable} ${bangers.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper text-ink overflow-x-hidden">
        <Loader />
        <Cursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
