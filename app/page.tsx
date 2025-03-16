"use client";
import { Inter } from "next/font/google";
// import { loadStripe } from "@stripe/stripe-js";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
        <div
            className={`min-h-screen bg-white overflow-hidden ${inter.className}`}
        >
            {/* Hero Section */}
            <Hero />

            {/* About Section */}
            <About />

            {/* Features Section */}
            <Features />

            {/* Pricing Section */}
            {/* Todo: Create payment button handler */}
            <Pricing onGetStartedClick={handleCheckout} />
        </div>
    );
}
