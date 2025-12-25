import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import { supabase } from '@/lib/supabase';

// Initialize Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(request: NextRequest) {
  try {
    const { registrationId, amount } = await request.json();

    if (!registrationId || !amount) {
      return NextResponse.json(
        { error: 'Registration ID and amount are required' },
        { status: 400 }
      );
    }

    // Create Razorpay order
    const order = await razorpay.orders.create({
      amount: amount * 100, // Amount in paise
      currency: 'INR',
      receipt: `reg_${registrationId}`,
      notes: {
        registration_id: registrationId,
      },
    });

    // Update registration with order ID
    const { error: updateError } = await supabase
      .from('registrations')
      .update({
        razorpay_order_id: order.id,
      })
      .eq('id', registrationId);

    if (updateError) {
      console.error('Error updating registration:', updateError);
    }

    return NextResponse.json({
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (error) {
    console.error('Payment order creation error:', error);
    return NextResponse.json(
      { error: 'Failed to create payment order' },
      { status: 500 }
    );
  }
}
