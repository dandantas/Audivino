'use server';

import Stripe from 'stripe';

export async function getCheckoutSession(sessionId: string): Promise<Stripe.Checkout.Session> {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
        apiVersion: "2025-02-24.acacia",
    });
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ["line_items.data.price.product"],
    });

    // TODO: add a server call to update the user's subscription status
    return session;
}