import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Toaster } from "react-hot-toast";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});




export const metadata: Metadata = {
  title: "Darul Ihsan Cadet Madrasah",
  description: "Darul Ihsan Cadet Madrasah is a leading educational institution focused on academic excellence and moral development.",
  keywords: ["Darul Ihsan", "Cadet Madrasah", "Madrasah", "Education", "Islamic School"],
  authors: [{ name: "Darul Ihsan Cadet Madrasah" }],
  robots: "index, follow", // গুগল ইঞ্জিনকে পেজ ক্রল করার অনুমতি দেয়
  openGraph: {
    title: "Darul Ihsan Cadet Madrasah",
    description: "Darul Ihsan Cadet Madrasah is a leading educational institution focused on academic excellence and moral development.",
    url: "https://your-website-url.com", // আপনার সাইটের URL দিন
    images: [
      {
        url: "https://res.cloudinary.com/dwicbvoi2/image/upload/v1742917088/logo_ccjcjz.jpg",
        width: 1200,
        height: 630,
        alt: "Darul Ihsan Cadet Madrasah Cover Image",
      },
    ],
    siteName: "Darul Ihsan Cadet Madrasah",
  },
  twitter: {
    card: "summary_large_image",
    title: "Darul Ihsan Cadet Madrasah",
    description: "Darul Ihsan Cadet Madrasah is a leading educational institution focused on academic excellence and moral development.",
    images: ["https://res.cloudinary.com/dwicbvoi2/image/upload/v1742917088/logo_ccjcjz.jpg"],
  },
};

// ✅ viewport আলাদা করে export করো
export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster position="bottom-right" reverseOrder={false} />
        {children}
      </body>
    </html>
  );
}
