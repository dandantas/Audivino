import { NextResponse } from 'next/server'
// import Stripe from 'stripe'
//
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//     apiVersion: '2025-02-24.acacia',
//     typescript: true,
// });
//
// const BASIC_PRICE_ID = process.env.STRIPE_BASIC_PRICE_ID!;
// const PREMIUM_PRICE_ID = process.env.STRIPE_PREMIUM_PRICE_ID!;
// const BASIC_PRODUCT_NAME = process.env.STRIPE_BASIC_PRODUCT_NAME!;
// const PREMIUM_PRODUCT_NAME = process.env.STRIPE_PREMIUM_PRODUCT_NAME!;
//
// type PriceType = 'basic' | 'premium';
//
// const getPriceId = (priceType: PriceType): string => {
//     switch (priceType) {
//         case 'basic':
//             return BASIC_PRICE_ID;
//         case 'premium':
//             return PREMIUM_PRICE_ID;
//         default:
//             throw new Error('Invalid price type');
//     }
// };
//
// const getProductName = (priceType: PriceType): string => {
//     switch (priceType) {
//         case 'basic':
//             return BASIC_PRODUCT_NAME;
//         case 'premium':
//             return PREMIUM_PRODUCT_NAME;
//         default:
//             throw new Error('Invalid price type');
//     }
// };
//
// export async function POST(request: Request) {
//     const body = await request.json()
//     const priceId = getPriceId(body.priceType as PriceType);
//     const productName = getProductName(body.priceType as PriceType);
//
//     const session = await stripe.checkout.sessions.create({
//         payment_method_types: ['card'],
//         line_items: [{
//             price: priceId,
//             quantity: 1,
//             price_data: {
//                 currency: 'brl',
//                 product_data: {
//                     name: productName,
//                 },
//             },
//             adjustable_quantity: {
//                 enabled: false,
//             },
//         }],
//         mode: 'subscription',
//         success_url: `${request.headers.get('origin')}/success`,
//         cancel_url: `${request.headers.get('origin')}/cancel`,
//     });
//
//     return NextResponse.json({ id: session.id })
// }
//

export async function POST() {
    return NextResponse.json({ received: true }, { status: 200 });
}
