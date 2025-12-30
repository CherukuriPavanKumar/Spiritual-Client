'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const PaymentSection: React.FC = () => {
  const RAZORPAY_LINK = 'https://pages.razorpay.com/rudra-chandi';

  return (
    <section
      id="registration"
      style={{
        padding: 'var(--spacing-lg) 0 var(--spacing-section)',
        background: 'linear-gradient(180deg, var(--cream-100) 0%, white 100%)',
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            maxWidth: '50rem',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          {/* Section heading */}
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.875rem, 1.6rem + 1.375vw, 2.75rem)',
              fontWeight: '600',
              color: 'var(--neutral-700)',
              marginBottom: 'var(--spacing-lg)',
              lineHeight: '1.3',
            }}
          >
            నమోదు మరియు చెల్లింపు
          </h2>

          {/* Decorative divider */}
          <div
            style={{
              width: '5rem',
              height: '3px',
              background: 'linear-gradient(90deg, transparent, var(--saffron-500), transparent)',
              margin: '0 auto var(--spacing-xl)',
            }}
          />

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              marginBottom: 'var(--spacing-xl)',
            }}
          >
            <p
              style={{
                fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                lineHeight: '2',
                color: 'var(--neutral-600)',
                marginBottom: 'var(--spacing-lg)',
                maxWidth: 'none',
                margin: '0 auto var(--spacing-lg)',
              }}
            >
              ఈ పవిత్ర యజ్ఞంలో పాల్గొనడానికి దయచేసి క్రింది బటన్ ద్వారా నమోదు చేసుకోండి.
            </p>

            <p
              style={{
                fontSize: 'clamp(0.9375rem, 0.85rem + 0.4375vw, 1.0625rem)',
                lineHeight: '1.75',
                color: 'var(--neutral-600)',
                fontWeight: '500',
                maxWidth: 'none',
                margin: '0 auto',
              }}
            >
              నమోదు మరియు చెల్లింపు ప్రక్రియ సురక్షితమైన Razorpay ద్వారా నిర్వహించబడుతుంది.
            </p>
          </motion.div>

          {/* Payment button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href={RAZORPAY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'var(--spacing-sm)',
                padding: 'clamp(var(--spacing-md), 3vw, var(--spacing-lg)) clamp(var(--spacing-xl), 5vw, var(--spacing-3xl))',
                background: 'linear-gradient(135deg, var(--saffron-500) 0%, var(--gold-400) 100%)',
                color: 'white',
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.125rem, 1rem + 0.625vw, 1.375rem)',
                fontWeight: '600',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 20px rgba(255, 153, 51, 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 12px 28px rgba(255, 153, 51, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(255, 153, 51, 0.3)';
              }}
            >
              <span style={{ fontSize: '1.5rem' }}>🙏</span>
              ఇప్పుడు నమోదు చేసుకోండి
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
