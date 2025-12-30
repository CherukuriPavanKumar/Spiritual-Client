'use client';

import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { GuruSection } from '@/components/GuruSection';

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
