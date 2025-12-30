'use client';

import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { GuruSection } from '@/components/GuruSection';
import { PaymentSection } from '@/components/PaymentSection';

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
              margin: '0 auto',
            }}
          >
            May divine blessings be upon all devotees
          </p>
        </div>
      </footer>
    </main>
  );
}
