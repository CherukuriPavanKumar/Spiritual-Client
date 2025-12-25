'use client';

import React, { useState } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { RegistrationForm, RegistrationFormData } from '@/components/RegistrationForm';
import { SuccessScreen } from '@/components/SuccessScreen';

type PageState = 'home' | 'registration' | 'success';

export default function Home() {
  const [pageState, setPageState] = useState<PageState>('home');
  const [registrationData, setRegistrationData] = useState<RegistrationFormData | null>(null);

  const handleRegisterClick = () => {
    // Smooth scroll to registration form
    setPageState('registration');
    setTimeout(() => {
      const element = document.getElementById('registration');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleRegistrationComplete = async (data: RegistrationFormData) => {
    setRegistrationData(data);

    try {
      // Save registration to database
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        // Show success screen with WhatsApp group link
        setPageState('success');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const handleReturnHome = () => {
    setPageState('home');
    setRegistrationData(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelRegistration = () => {
    setPageState('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show success screen with WhatsApp link
  if (pageState === 'success' && registrationData) {
    return (
      <SuccessScreen
        registrationData={{
          fullName: registrationData.fullName,
          email: registrationData.email,
          mobile: registrationData.mobile,
          participationMode: registrationData.participationMode,
        }}
        onClose={handleReturnHome}
      />
    );
  }

  // Main website
  return (
    <main>
      {/* Hero Section */}
      <HeroSection onRegisterClick={handleRegisterClick} />

      {/* About Section */}
      <AboutSection />

      {/* Registration Form */}
        <RegistrationForm
          onComplete={handleRegistrationComplete}
          onCancel={handleCancelRegistration}
        />
      

      {/* Footer */}
      <footer
        style={{
          padding: 'var(--spacing-xl) 0',
          background: 'var(--neutral-700)',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <p
            style={{
              fontSize: 'clamp(0.875rem, 0.8rem + 0.35vw, 1rem)',
              lineHeight: '1.75',
              marginBottom: 'var(--spacing-sm)',
            }}
          >
            🕉 Sahasra Chandi and Shiva Sahasranama Maha Yajna
          </p>
          <p
            style={{
              fontSize: 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
              color: 'var(--neutral-400)',
            }}
          >
            May divine blessings be upon all devotees
          </p>
        </div>
      </footer>
    </main>
  );
}
