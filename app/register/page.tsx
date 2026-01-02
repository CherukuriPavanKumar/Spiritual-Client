'use client';

import React from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--cream-50)' }}>
      {/* Header with back button */}
      <div
        style={{
          padding: 'var(--spacing-lg) 0',
          background: 'linear-gradient(135deg, var(--saffron-500) 0%, var(--gold-500) 100%)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div className="container">
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--spacing-sm)',
              color: 'black',
              textDecoration: 'none',
              fontSize: 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
              fontWeight: '500',
              transition: 'opacity 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            హోమ్‌కు తిరిగి వెళ్ళండి
          </Link>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.875rem, 1.6rem + 1.375vw, 2.75rem)',
              fontWeight: '700',
              color: 'black',
              textAlign: 'center',
              marginTop: 'var(--spacing-md)',
              lineHeight: '1.3',
            }}
          >
            మాతో సంప్రదించండి
          </h1>
          <p
            style={{
              fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
              lineHeight: '1.75',
              color: 'rgba(0, 0, 0, 0.8)',
              textAlign: 'center',
              marginTop: 'var(--spacing-sm)',
              maxWidth: '45rem',
              margin: 'var(--spacing-sm) auto 0',
            }}
          >
            యజ్ఞ నమోదు, సేవా సహకారం లేదా ఏవైనా సందేహాల కోసం మమ్మల్ని సంప్రదించండి
          </p>
        </div>
      </div>

      {/* Google Form Embed */}
      <div className="container" style={{ padding: 'var(--spacing-2xl) 0' }}>
        <div
          style={{
            maxWidth: '56rem',
            margin: '0 auto',
            background: 'white',
            borderRadius: '1rem',
            overflow: 'hidden',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
          }}
        >
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScIshnWgIMO_RzdVPzYCvb9t6H57cYbYxyfPVE5Lrfzt8Q0ZA/viewform?embedded=true"
            width="100%"
            height="1200"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            style={{
              border: 'none',
              display: 'block',
            }}
          >
            Loading…
          </iframe>
        </div>

        {/* Contact Information */}
        <div
          style={{
            maxWidth: '56rem',
            margin: 'var(--spacing-xl) auto 0',
            padding: 'var(--spacing-xl)',
            background: 'linear-gradient(135deg, var(--saffron-50) 0%, var(--gold-50) 100%)',
            borderRadius: '0.75rem',
            border: '2px solid var(--saffron-200)',
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.25rem, 1.1rem + 0.75vw, 1.625rem)',
              fontWeight: '600',
              color: 'var(--neutral-700)',
              textAlign: 'center',
              marginBottom: 'var(--spacing-lg)',
            }}
          >
            మమ్మల్ని చేరుకోండి
          </h3>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-md)',
              alignItems: 'center',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <p
                style={{
                  fontSize: 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
                  lineHeight: '1.75',
                  color: 'var(--neutral-600)',
                  marginBottom: 'var(--spacing-xs)',
                }}
              >
                📞 ఫోన్ / వాట్సాప్
              </p>
              <p
                style={{
                  fontSize: 'clamp(1.125rem, 1rem + 0.625vw, 1.375rem)',
                  lineHeight: '1.75',
                  color: 'var(--saffron-700)',
                  fontWeight: '600',
                }}
              >
                <a href="tel:8123636464" style={{ color: 'inherit', textDecoration: 'none' }}>
                  81236 36464
                </a>
              </p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <p
                style={{
                  fontSize: 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
                  lineHeight: '1.75',
                  color: 'var(--neutral-600)',
                  marginBottom: 'var(--spacing-xs)',
                }}
              >
                🌐 మరిన్ని వివరాలకు
              </p>
              <a
                href="https://www.gurutejomayi.org"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  color: 'var(--saffron-600)',
                  textDecoration: 'none',
                  fontWeight: '500',
                }}
              >
                www.gurutejomayi.org
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
