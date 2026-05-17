import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

// POST /api/stripe/checkout — create a Stripe checkout session
// NOTE: This route requires the STRIPE_SECRET_KEY environment variable.
// When not set, it falls back to a mock mode that still records the donation
// in the database with status "pending" so no data is lost.

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      donorEmail,
      donorName,
      amount,
      currency = 'USD',
      isRecurring = false,
      recurringFreq = 'monthly',
      perkId,
      message,
      isAnonymous = false,
    } = body;

    if (!donorEmail || !amount || amount <= 0) {
      return NextResponse.json(
        { error: 'Email and a positive amount are required' },
        { status: 400 }
      );
    }

    const transactionRef = `ART-${Date.now()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

    // Check if Stripe is configured
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

    if (stripeSecretKey) {
      // ─── REAL STRIPE INTEGRATION ───
      const Stripe = (await import('stripe')).default;
      const stripe = new Stripe(stripeSecretKey, { apiVersion: '2025-04-30.basil' });

      const session = await stripe.checkout.sessions.create({
        mode: isRecurring ? 'subscription' : 'payment',
        payment_method_types: ['card'],
        customer_email: donorEmail,
        line_items: [
          {
            price_data: {
              currency: currency.toLowerCase(),
              product_data: {
                name: isRecurring
                  ? `Artemis ${recurringFreq} donation`
                  : 'Artemis Donation',
                description: isRecurring
                  ? `Recurring ${recurringFreq} donation to the University of Artemis $100M Founding Campaign`
                  : 'One-time donation to the University of Artemis $100M Founding Campaign',
              },
              unit_amount: Math.round(amount * 100), // Stripe expects cents
              ...(isRecurring ? { recurring: { interval: recurringFreq === 'yearly' ? 'year' : 'month' } } : {}),
            },
            quantity: 1,
          },
        ],
        success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}?donation=success&ref=${transactionRef}`,
        cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}?donation=cancelled`,
        metadata: {
          donorName: donorName || '',
          transactionRef,
          perkId: perkId || '',
          isAnonymous: String(isAnonymous),
          message: message || '',
        },
      });

      // Create pending donation in DB
      await db.donation.create({
        data: {
          donorEmail,
          donorName: isAnonymous ? null : donorName,
          donorAnonymous: isAnonymous,
          amount,
          currency,
          paymentMethod: 'card',
          paymentStatus: 'pending',
          transactionRef,
          stripeSessionId: session.id,
          perkId: perkId || null,
          isRecurring,
          recurringFreq: isRecurring ? recurringFreq : null,
          message: message || null,
        },
      });

      return NextResponse.json({
        success: true,
        checkoutUrl: session.url,
        transactionRef,
      });
    } else {
      // ─── FALLBACK: NO STRIPE KEY ───
      // Record the donation as pending. In production, you would redirect
      // the user to Stripe. Here we just save it so no data is lost.
      const donation = await db.donation.create({
        data: {
          donorEmail,
          donorName: isAnonymous ? null : donorName,
          donorAnonymous: isAnonymous,
          amount,
          currency,
          paymentMethod: 'card',
          paymentStatus: 'pending',
          transactionRef,
          perkId: perkId || null,
          isRecurring,
          recurringFreq: isRecurring ? recurringFreq : null,
          message: message || null,
        },
      });

      return NextResponse.json({
        success: true,
        checkoutUrl: null,
        transactionRef,
        donationId: donation.id,
        message: 'Donation recorded. Payment gateway not yet configured — the admin dashboard shows this as "pending" for follow-up.',
      });
    }
  } catch (error) {
    console.error('Stripe checkout error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
