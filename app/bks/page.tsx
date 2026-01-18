'use client';

import React from 'react';
import Link from 'next/link';

export default function BooksPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--cream-50)' }}>
      {/* Header */}
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
              stroke="currentColor"
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
            శివ దశసహస్రనామావళి గ్రంథం
          </h1>
          <h5
            style={{
              fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
              lineHeight: '1.75',
              color: 'black',
              textAlign: 'center',
              marginTop: 'var(--spacing-sm)',
            }}
          >
            గ్రంథ నమోదు & ఆర్డర్ ఫారం
          </h5>
        </div>
      </div>

      {/* Google Form Embed */}
      <div className="container" style={{ padding: 'var(--spacing-2xl) 0' }}>
        <div
          style={{
            maxWidth: '56rem',
            margin: '0 auto',
            background: 'black',
            borderRadius: '1rem',
            overflow: 'hidden',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
          }}
        >
          <iframe
            src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
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

        {/* Help Text */}
        <div
          style={{
            maxWidth: '56rem',
            margin: 'var(--spacing-xl) auto 0',
            padding: 'var(--spacing-lg)',
            background: 'linear-gradient(135deg, var(--saffron-50) 0%, var(--gold-50) 100%)',
            borderRadius: '0.75rem',
            border: '2px solid var(--saffron-200)',
            textAlign: 'center',
          }}
        >
          <h4
            style={{
              fontSize: 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
              lineHeight: '1.75',
              color: 'var(--neutral-700)',
              marginBottom: 'var(--spacing-sm)',
              
            }}
          >
            ఏవైనా సందేహాలు లేదా సహాయం అవసరమా?
          </h4>
          <h5 
            style={{
              fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
              lineHeight: '1.75',
              color: 'var(--saffron-700)',
              fontWeight: '600',
              marginBottom: 'var(--spacing-md)',
            }}
          >
            📞 <a href="tel:8123636464" style={{ color: 'inherit', textDecoration: 'none' }}>81236 36464</a>
          </h5>
          
          {/* Social Media Links */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-sm)',
              alignItems: 'center',
            }}
          >
            <a
              href="https://gurutejomayi.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--spacing-xs)',
                color: 'var(--saffron-700)',
                textDecoration: 'none',
                fontSize: 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
                fontWeight: '500',
                transition: 'opacity 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.7';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
            >
              🌐 gurutejomayi.org
            </a>
            
            <a
              href="https://youtube.com/@gurutejomayi?si=5MaIwmP_1Bz9rWwv"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--spacing-xs)',
                color: 'var(--saffron-700)',
                textDecoration: 'none',
                fontSize: 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
                fontWeight: '500',
                transition: 'opacity 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.7';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
            >
              📺 YouTube
            </a>
            
            <a
              href="https://www.instagram.com/guru_tejomayi/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--spacing-xs)',
                color: 'var(--saffron-700)',
                textDecoration: 'none',
                fontSize: 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
                fontWeight: '500',
                transition: 'opacity 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.7';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
            >
              📷 Instagram
            </a>
            
            <a
              href="https://chat.whatsapp.com/FNQ1hYWRcXYL7VUf6MiAgX"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--spacing-xs)',
                color: 'var(--saffron-700)',
                textDecoration: 'none',
                fontSize: 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
                fontWeight: '500',
                transition: 'opacity 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.7';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
            >
              💬 WhatsApp Group
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
