'use client';

import React, { useEffect } from 'react';
import Script from 'next/script';

interface PaymentGatewayProps {
  registrationId: string;
  amount: number;
  userDetails: {
    name: string;
    email: string;
    mobile: string;
  };
  onSuccess: (paymentData: any) => void;
  onFailure: (error: any) => void;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

export const PaymentGateway: React.FC<PaymentGatewayProps> = ({
  registrationId,
  amount,
  userDetails,
  onSuccess,
  onFailure,
}) => {
  const [isLoading, setIsLoading] = React.useState(false);

  const handlePayment = async () => {
    try {
      setIsLoading(true);

      // Create order
      const orderResponse = await fetch('/api/payment/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          registrationId,
          amount,
        }),
      });

      const orderData = await orderResponse.json();

      if (!orderData.success) {
        throw new Error('Failed to create payment order');
      }

      // Razorpay options
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'Sahasra Chandi Maha Yajna',
        description: 'Dakshina for participation in the sacred yajna',
        order_id: orderData.orderId,
        prefill: {
          name: userDetails.name,
          email: userDetails.email,
          contact: userDetails.mobile,
        },
        theme: {
          color: '#FF9933', // Saffron color
        },
        handler: async function (response: any) {
          // Verify payment
          const verifyResponse = await fetch('/api/payment/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              registrationId,
            }),
          });

          const verifyData = await verifyResponse.json();

          if (verifyData.success && verifyData.verified) {
            onSuccess(response);
          } else {
            onFailure(new Error('Payment verification failed'));
          }
        },
        modal: {
          ondismiss: function () {
            setIsLoading(false);
            onFailure(new Error('Payment cancelled by user'));
          },
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Payment error:', error);
      setIsLoading(false);
      onFailure(error);
    }
  };

  useEffect(() => {
    // Auto-trigger payment when component mounts
    const timer = setTimeout(() => {
      if (window.Razorpay) {
        handlePayment();
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="lazyOnload"
      />
      <div
        style={{
          textAlign: 'center',
          padding: 'var(--spacing-2xl)',
        }}
      >
        <div
          style={{
            fontSize: '3rem',
            marginBottom: 'var(--spacing-lg)',
            animation: 'pulse 2s ease-in-out infinite',
          }}
        >
          🙏
        </div>
        <h3
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
            fontWeight: '600',
            color: 'var(--neutral-700)',
            marginBottom: 'var(--spacing-md)',
          }}
        >
          {isLoading ? 'Opening payment gateway...' : 'Preparing your dakshina...'}
        </h3>
        <p
          style={{
            fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
            lineHeight: '1.75',
            color: 'var(--neutral-600)',
          }}
        >
          Please wait while we securely process your contribution.
        </p>

        <style jsx>{`
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
              transform: scale(1);
            }
            50% {
              opacity: 0.7;
              transform: scale(1.1);
            }
          }
        `}</style>
      </div>
    </>
  );
};
