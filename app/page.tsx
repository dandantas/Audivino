"use client";
import { Inter } from "next/font/google";
// import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
);

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const [, setContactOpen] = useState(false);
    const handleCheckout = async (priceType: "basic" | "premium") => {
        const stripe = await stripePromise;
    
        const response = await fetch("/api/checkout-sessions", {
            method: "POST",
            body: JSON.stringify({ priceType }),
        });
        const session = await response.json();
        if (stripe) {
            await stripe.redirectToCheckout({ sessionId: session.id });
        } else {
            console.error("Stripe is not loaded");
        }
    };

    return (
        <div className={`min-h-screen bg-white overflow-hidden ${inter.className}`}>
            <Navbar onContactClick={() => setContactOpen(true)} />
            {/* Hero Section */}
            <Hero onGetStartedClick={() => console.log("get started")} />

            {/* About Section */}
            <About />

            {/* Features Section */}
            <Features />

            {/* Pricing Section */}
            {/* Todo: Create payment button handler */}
            <Pricing onGetStartedClick={handleCheckout} />

            {/* Footer */}
            <Footer />
        </div>
    );
}
