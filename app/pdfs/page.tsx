'use client';

import React from 'react';
import Link from 'next/link';

export default function PDFsPage() {
  const pdfs = [
    {
      id: 1,
      title: 'శివ సహస్రనామావళి',
      description: 'శివ దశసహస్రనామావళి గ్రంథం PDF',
      filename: 'SahasraNamavali.pdf',
      url: '/pdfs/SahasraNamavali.pdf',
    },
    {
      id: 2,
      title: 'శ్రీ రుద్రం',
      description: 'శ్రీ రుద్రం స్తోత్రం PDF',
      filename: 'SriRudram.pdf',
      url: '/pdfs/SriRudram.pdf',
    },
    {
      id: 3,
      title: 'దుర్గా సప్తశతి',
      description: 'దుర్గా సప్తశతి పారాయణం PDF',
      filename: 'DurgaSaptasathi.pdf',
      url: '/pdfs/DurgaSaptasathi.pdf',
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
            గ్రంథాల PDF లింకులు
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
            మీరు కావలసిన గ్రంథాన్ని చూడండి లేదా డౌన్‌లోడ్ చేయండి
          </h5>
        </div>
      </div>

      <div className="container" style={{ padding: 'var(--spacing-2xl) 0' }}>
        {/* PDF Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--spacing-xl)',
            maxWidth: '75rem',
            margin: '0 auto var(--spacing-2xl)',
          }}
        >
          {pdfs.map((pdf) => (
            <div
              key={pdf.id}
              style={{
                background: 'white',
                borderRadius: '1rem',
                padding: 'var(--spacing-lg)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
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
              {/* PDF Icon */}
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  margin: '0 auto var(--spacing-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, var(--saffron-100) 0%, var(--gold-100) 100%)',
                  borderRadius: '0.75rem',
                }}
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--saffron-600)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>

              {/* PDF Info */}
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.125rem, 1rem + 0.625vw, 1.5rem)',
                  fontWeight: '600',
                  color: 'var(--neutral-700)',
                  marginBottom: 'var(--spacing-sm)',
                  textAlign: 'center',
                }}
              >
                {pdf.title}
              </h3>
              <p
                style={{
                  fontSize: 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
                  lineHeight: '1.75',
                  color: 'var(--neutral-600)',
                  marginBottom: 'var(--spacing-md)',
                  textAlign: 'center',
                }}
              >
                {pdf.description}
              </p>

              {/* Action Buttons */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--spacing-sm)',
                }}
              >
                {/* View PDF Button */}
                <a
                  href={pdf.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 'var(--spacing-xs)',
                    padding: 'var(--spacing-sm) var(--spacing-md)',
                    background: 'var(--saffron-500)',
                    color: 'white',
                    borderRadius: '0.5rem',
                    textDecoration: 'none',
                    fontSize: 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
                    fontWeight: '600',
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
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  PDF చూడండి
                </a>

                {/* Download Button */}
                <a
                  href={pdf.url}
                  download
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 'var(--spacing-xs)',
                    padding: 'var(--spacing-sm) var(--spacing-md)',
                    background: 'white',
                    color: 'var(--saffron-600)',
                    border: '2px solid var(--saffron-500)',
                    borderRadius: '0.5rem',
                    textDecoration: 'none',
                    fontSize: 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--saffron-50)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'white';
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
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  డౌన్‌లోడ్
                </a>

                {/* Copy Link Button */}
                <button
                  onClick={() => {
                    const fullUrl = `${window.location.origin}${pdf.url}`;
                    navigator.clipboard.writeText(fullUrl);
                    alert('లింక్ కాపీ చేయబడింది!');
                  }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 'var(--spacing-xs)',
                    padding: 'var(--spacing-sm) var(--spacing-md)',
                    background: 'var(--gold-100)',
                    color: 'var(--neutral-700)',
                    border: 'none',
                    borderRadius: '0.5rem',
                    fontSize: 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'background 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--gold-200)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--gold-100)';
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
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  లింక్ కాపీ చేయండి
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div
          style={{
            maxWidth: '56rem',
            margin: '0 auto',
            padding: 'var(--spacing-lg)',
            background: 'linear-gradient(135deg, var(--saffron-50) 0%, var(--gold-50) 100%)',
            borderRadius: '0.75rem',
            border: '2px solid var(--saffron-200)',
            textAlign: 'center',
          }}
        >
          <h4
            style={{
              fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
              lineHeight: '1.75',
              color: 'var(--neutral-700)',
              marginBottom: 'var(--spacing-sm)',
              fontWeight: '600',
            }}
          >
            📄 PDF లింకులు ఎలా ఉపయోగించాలి?
          </h4>
          <p
            style={{
              fontSize: 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
              lineHeight: '1.75',
              color: 'var(--neutral-600)',
            }}
          >
            • "PDF చూడండి" బటన్ క్లిక్ చేసి బ్రౌజర్‌లో చూడవచ్చు
            <br />
            • "డౌన్‌లోడ్" బటన్ క్లిక్ చేసి మీ పరికరంలో సేవ్ చేసుకోవచ్చు
            <br />
            • "లింక్ కాపీ చేయండి" బటన్ తో ఇతరులకు షేర్ చేయవచ్చు
          </p>
        </div>
      </div>
    </main>
  );
}
