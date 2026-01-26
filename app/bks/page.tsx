'use client';

import React, { useState } from 'react';
import Link from 'next/link';

type BookType = 'book1' | 'book2' | 'book3' | null;

export default function BooksPage() {
  const [selectedBook, setSelectedBook] = useState<BookType>(null);

  const books = [
    {
      id: 'book1' as const,
      title: 'శివ దశసహస్రనామావళి',
      description: 'పూర్తి శివ దశసహస్రనామావళి సహ వివరణ',
      image: '/books/dasa.jpeg',
      formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScfy2EUTQMW_tVycgoSxdOICXbowPSNpUoQSIYWc6UpCvJL9w/viewform?embedded=true',
    },
    {
      id: 'book2' as const,
      title: 'శ్రీ రుద్రం',
      description: 'శివ స్తోత్ర సంగ్రహం',
      image: '/books/rudram.jpeg',
      formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdjLfaUIXMueha5-iB8CA1quSsTjYFTfDSpyko2lIr9WJbXoA/viewform?embedded=true',
    },
    {
      id: 'book3' as const,
      title: 'దుర్గా సప్తశతి',
      description: 'చండీ పారాయణ గ్రంథం',
      image: '/books/sapthashati.jpeg',
      formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfU6IPJmDgWgfhRlMxdaAUTf0eAw4-Ilc5JuKcObHbCWYUv8g/viewform?embedded=true',
    },
  ];

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
            {selectedBook ? books.find(b => b.id === selectedBook)?.title : 'గ్రంథాలు'}
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
            {selectedBook ? 'గ్రంథ నమోదు & ఆర్డర్ ఫారం' : 'మీరు కావలసిన గ్రంథాన్ని ఎంచుకోండి'}
          </h5>
        </div>
      </div>

      <div className="container" style={{ padding: 'var(--spacing-2xl) 0' }}>
        {!selectedBook ? (
          /* Book Cards Grid */
          <>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: 'var(--spacing-xl)',
                maxWidth: '75rem',
                margin: '0 auto',
              }}
            >
              {books.map((book) => (
                <div
                  key={book.id}
                  onClick={() => setSelectedBook(book.id)}
                  style={{
                    background: 'white',
                    borderRadius: '1rem',
                    overflow: 'hidden',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  {/* Book Image */}
                  <div
                    style={{
                      width: '100%',
                      height: '400px',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={book.image}
                      alt={book.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                  {/* Book Info */}
                  <div style={{ padding: 'var(--spacing-lg)' }}>
                    <h3
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(1.125rem, 1rem + 0.625vw, 1.5rem)',
                        fontWeight: '600',
                        color: 'var(--neutral-700)',
                        marginBottom: 'var(--spacing-sm)',
                      }}
                    >
                      {book.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
                        lineHeight: '1.75',
                        color: 'var(--neutral-600)',
                        marginBottom: 'var(--spacing-md)',
                      }}
                    >
                      {book.description}
                    </p>
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 'var(--spacing-xs)',
                        color: 'var(--saffron-600)',
                        fontSize: 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
                        fontWeight: '600',
                      }}
                    >
                      ఆర్డర్ చేయండి
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          /* Form Display */
          <>
            <button
              onClick={() => setSelectedBook(null)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--spacing-sm)',
                padding: 'var(--spacing-sm) var(--spacing-md)',
                background: 'var(--saffron-500)',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                fontSize: 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
                fontWeight: '500',
                cursor: 'pointer',
                marginBottom: 'var(--spacing-lg)',
                transition: 'background 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--saffron-600)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--saffron-500)';
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              అన్ని గ్రంథాలు చూడండి
            </button>
            
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
                src={books.find(b => b.id === selectedBook)?.formUrl}
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
          </>
        )}

        {/* Help Text - Always visible */}
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
