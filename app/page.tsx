'use client';

import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { GuruSection } from '@/components/GuruSection';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  const handleRegisterClick = () => {
    // Smooth scroll to payment section
    const element = document.getElementById('registration');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <HeroSection onRegisterClick={handleRegisterClick} />

      {/* About Section */}
      <AboutSection />

      {/* Guru & Videos Section */}
      <GuruSection />

      {/* Registration CTA Section */}
      <section
        style={{
          padding: 'var(--spacing-section) 0',
          background: 'linear-gradient(180deg, var(--cream-50) 0%, white 100%)',
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
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.875rem, 1.6rem + 1.375vw, 2.75rem)',
                fontWeight: '700',
                color: 'var(--neutral-700)',
                marginBottom: 'var(--spacing-lg)',
                lineHeight: '1.3',
              }}
            >
              మహా యజ్ఞంలో పాల్గొనండి
            </h2>
            <h2
              style={{
                fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                lineHeight: '2',
                color: 'var(--neutral-600)',
                marginBottom: 'var(--spacing-2xl)',
              }}
            >
              నమోదు, సేవా సహకారం లేదా ఏవైనా సందేహాల కోసం మాతో సంప్రదించండి. 
              <br />
              నేరుగా చెల్లింపు చేయడానికి కూడా మీరు సిద్ధంగా ఉన్నారు.
            </h2>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'var(--spacing-lg)',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Link
                href="/register"
                style={{
                  display: 'inline-block',
                  padding: 'clamp(var(--spacing-md), 2vw, var(--spacing-lg)) clamp(var(--spacing-xl), 4vw, var(--spacing-3xl))',
                  background: 'linear-gradient(135deg, var(--saffron-500) 0%, var(--gold-500) 100%)',
                  color: 'black',
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.125rem, 1rem + 0.625vw, 1.375rem)',
                  fontWeight: '600',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  boxShadow: '0 8px 24px rgba(217, 119, 6, 0.3)',
                  transition: 'all 0.3s ease',
                  border: 'none',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(217, 119, 6, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(217, 119, 6, 0.3)';
                }}
              >
                � మాతో సంప్రదించండి
              </Link>              
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          padding: 'var(--spacing-xl) 0',
          background: 'var(--neutral-700)',
          color: 'white',
          textAlign: 'center',
          
        }}
      >
        <div className="container ">
          <p
            style={{
              fontSize: 'clamp(0.875rem, 0.8rem + 0.35vw, 1rem)',
              lineHeight: '1.75',
              marginBottom: 'var(--spacing-sm)',
              maxWidth: 'none',
              margin: '0 auto var(--spacing-sm)',
            }}
          >
            🕉 సహస్రచండి మరియు శివ దశసహస్రనామ మహాయజ్ఞం
          </p>
          <p
            style={{
              fontSize: 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
              color: 'var(--neutral-400)',
              maxWidth: 'none',
              margin: '0 auto var(--spacing-md)',
            }}
          >
            May divine blessings be upon all devotees
          </p>
          <a
            href="/terms-and-conditions.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
              color: 'var(--saffron-300)',
              textDecoration: 'underline',
              display: 'inline-block',
              marginTop: 'var(--spacing-sm)',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--saffron-200)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--saffron-300)';
            }}
          >
            నియమాలు మరియు షరతులు (Terms & Conditions)
          </a>
        </div>
      </footer>
    </main>
  );
}
