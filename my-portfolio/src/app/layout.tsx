import "./globals.css";
import type { Metadata } from "next";
import { Inter, Tourney, Roboto, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const tourney = Tourney({ 
  subsets: ["latin"],
  weight: ["300"],
  style: ["italic"],
  variable: "--font-tourney",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Sunidhi's Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${tourney.variable} ${roboto.variable} ${poppins.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}