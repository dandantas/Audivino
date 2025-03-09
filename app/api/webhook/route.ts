import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { headers } from 'next/headers';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY! || 'stripe_secret_key', {
    apiVersion: '2025-02-24.acacia'
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: Request) {
    try {
        const body = await req.text();
        const signature = (await headers()).get('stripe-signature')!;

        const event = stripe.webhooks.constructEvent(
            body,
            signature,
            webhookSecret
        );

        console.log('Received event:', event);

        switch (event.type) {
            case 'checkout.session.completed':
                const checkoutSession = event.data.object as Stripe.Checkout.Session;
                console.log('Checkout session completed:', checkoutSession);
                break;
            case 'invoice.payment_succeeded':
                const invoice = event.data.object as Stripe.Invoice;
                console.log('Invoice payment succeeded:', invoice);
                break;
            case 'payment_intent.succeeded':
                const paymentIntent = event.data.object as Stripe.PaymentIntent;
                // Handle successful payment
                console.log('Payment intent succeeded:', paymentIntent);
                break;
            case 'payment_intent.payment_failed':
                // Handle failed payment
                console.log('Payment intent failed:', event.data.object);
                break;
            default:
                console.log(`Unhandled event type: ${event.type}`);
        }

        return NextResponse.json({ received: true }, { status: 200 });
    } catch (err) {
        console.error('Webhook error:', err);
        return NextResponse.json(
            { error: 'Webhook handler failed' },
            { status: 400 }
        );
    }
}