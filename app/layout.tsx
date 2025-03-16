import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import constants from "@/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: constants.platform_name,
    description: constants.platform_description,
    keywords:
        "audivino, mensagens bíblicas, áudio bíblico, whatsapp, mensagens diárias, reflexão espiritual, catapio",
    authors: [{ name: "Catapio", url: "https://catap.io" }],
    creator: "Catapio",
    publisher: "Catapio",
    metadataBase: new URL("https://audivino.catap.io"),
    alternates: {
        canonical: "/",
        languages: {
            "pt-BR": "/",
        },
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-video-preview": -1,
            "max-snippet": -1,
        },
    },
    openGraph: {
        type: "website",
        locale: "pt_BR",
        url: "https://audivino.catap.io",
        siteName: constants.platform_name,
        title: constants.platform_name,
        description: constants.platform_description,
        images: [
            {
                url: "https://audivino.catap.io/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Audivino - Mensagens bíblicas diárias via WhatsApp",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: constants.platform_name,
        description: constants.platform_description,
        creator: "@catap_io",
        images: ["https://audivino.catap.io/twitter-image.jpg"],
    },
    category: "Religious & Spiritual",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
