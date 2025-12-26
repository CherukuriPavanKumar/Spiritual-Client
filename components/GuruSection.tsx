'use client';

import React from 'react';
import { motion } from 'framer-motion';
import tejuMaaPhoto from '../public/teju-maa-photo.jpeg';

export const GuruSection: React.FC = () => {
  const CHANNEL_URL = 'https://www.youtube.com/@Tejomayii';
  const FEATURED_VIDEO_ID = 'sQQsw8a5KS0'; // Extracted from the URL

  return (
    <section
      style={{
        padding: 'var(--spacing-section) 0',
        background: 'white',
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            maxWidth: '75rem',
            margin: '0 auto',
          }}
        >
          {/* Section heading */}
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.875rem, 1.6rem + 1.375vw, 2.75rem)',
              fontWeight: '600',
              color: 'var(--neutral-700)',
              textAlign: 'center',
              marginBottom: 'var(--spacing-md)',
              lineHeight: '1.3',
            }}
          >
            గురు తేజోమయి గారి గురించి
          </h2>

          {/* Decorative divider */}
          <div
            style={{
              width: '5rem',
              height: '3px',
              background: 'linear-gradient(90deg, transparent, var(--saffron-500), transparent)',
              margin: '0 auto var(--spacing-2xl)',
            }}
          />

          {/* Main content grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
              gap: 'var(--spacing-2xl)',
              alignItems: 'start',
              marginBottom: 'var(--spacing-2xl)',
            }}
          >
            {/* Left: Photo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  width: '100%',
                  maxWidth: '400px',
                  aspectRatio: '3/4',
                  background: 'linear-gradient(135deg, var(--saffron-100) 0%, var(--gold-100) 100%)',
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                  border: '4px solid var(--saffron-200)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                <img
                  src="/teju-maa-photo.jpeg"
                  alt="గురు తేజోమయి"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </motion.div>

            {/* Right: Bio and description */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--spacing-lg)',
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(1.5rem, 1.3rem + 1vw, 2rem)',
                    fontWeight: '600',
                    color: 'var(--neutral-700)',
                    marginBottom: 'var(--spacing-md)',
                  }}
                >
                  శ్రీ గురు తేజోమయి
                </h3>

                <p
                  style={{
                    fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                    lineHeight: '2',
                    color: 'var(--neutral-600)',
                    marginBottom: 'var(--spacing-md)',
                  }}
                >
                  గురు తేజోమయి గారు లోక శ్రేయస్సు మరియు లోక కళ్యాణం కొరకు ఇప్పటివరకు <strong>160కు పైగా హోమాలు</strong> నిర్వహించారు. వాటిలో <strong>64కు పైగా రుద్ర చండీ హవనాలు</strong> ఉన్నాయి.
                </p>

                <p
                  style={{
                    fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                    lineHeight: '2',
                    color: 'var(--neutral-600)',
                    marginBottom: 'var(--spacing-md)',
                  }}
                >
                  శివరాత్రి నాటికి, గురుమా నిరంతరంగా <strong>100 రోజుల రుద్ర చండీ హవన సాధన</strong> పూర్తి చేస్తారు.
                </p>

                <p
                  style={{
                    fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                    lineHeight: '2',
                    color: 'var(--neutral-600)',
                  }}
                >
                  అమ్మవారి మరియు స్వామివారి ఆజ్ఞ ప్రకారం, ఈ సమస్త హవనాల ద్వారా పోగుచేసిన పుణ్య ఫలాన్ని ప్రపంచ శాంతి మరియు శ్రేయస్సు కొరకు కామాఖ్యా దేవి మరియు కంచి కామాక్షి అమ్మవారి ఆలయాలలో ధారపోస్తారు.
                </p>
              </div>

              {/* Featured qualities */}
              <div
                style={{
                  padding: 'var(--spacing-lg)',
                  background: 'linear-gradient(135deg, var(--cream-100) 0%, var(--saffron-50) 100%)',
                  borderRadius: '0.75rem',
                  borderLeft: '4px solid var(--saffron-500)',
                }}
              >
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--spacing-sm)',
                  }}
                >
                  {[
                    '160+ హోమాలు నిర్వహించారు',
                    '64+ రుద్ర చండీ హవనాలు పూర్తి చేశారు',
                    '100 రోజుల రుద్ర చండీ హవన సాధన',
                    'ప్రపంచ శాంతి కొరకు అంకితం',
                  ].map((item, index) => (
                    <li
                      key={index}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: 'clamp(0.9375rem, 0.85rem + 0.4375vw, 1.0625rem)',
                        lineHeight: '1.75',
                        color: 'var(--neutral-700)',
                      }}
                    >
                      <span
                        style={{
                          marginRight: 'var(--spacing-sm)',
                          color: 'var(--saffron-600)',
                          fontSize: '1.25rem',
                          fontWeight: '600',
                        }}
                      >
                        ✦
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Featured Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              background: 'linear-gradient(135deg, var(--saffron-50) 0%, var(--gold-50) 100%)',
              padding: 'clamp(var(--spacing-xl), 4vw, var(--spacing-3xl))',
              borderRadius: '1rem',
              border: '2px solid var(--saffron-200)',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.5rem, 1.3rem + 1vw, 2rem)',
                fontWeight: '600',
                color: 'var(--neutral-700)',
                textAlign: 'center',
                marginBottom: 'var(--spacing-md)',
              }}
            >
              గత హవనాల దృశ్యాలు
            </h3>

            <h3
              style={{
                textAlign: 'center',
                fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                color: 'var(--neutral-600)',
                marginBottom: 'var(--spacing-xl)',
                lineHeight: '1.75',
              }}
            >
              గురు తేజోమయి గారు నిర్వహించిన పవిత్ర హవనాల వీడియోలను చూడండి
            </h3>

            {/* Video embed */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '56rem',
                margin: '0 auto',
                aspectRatio: '16/9',
                borderRadius: '0.75rem',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                marginBottom: 'var(--spacing-xl)',
              }}
            >
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${FEATURED_VIDEO_ID}?rel=0`}
                title="గురు తేజోమయి - హవన వీడియో"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>

            {/* Subscribe CTA */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 'var(--spacing-md)',
              }}
            >
              <p
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  color: 'var(--neutral-700)',
                  textAlign: 'center',
                  fontWeight: '500',
                }}
              >
                మరిన్ని పవిత్ర హవనాల వీడియోల కోసం ఛానల్‌కు సబ్‌స్క్రైబ్ చేయండి
              </p>

              <a
                href={CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-sm)',
                  padding: 'clamp(var(--spacing-sm), 2vw, var(--spacing-md)) clamp(var(--spacing-lg), 4vw, var(--spacing-2xl))',
                  background: '#FF0000',
                  color: 'white',
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  fontWeight: '600',
                  borderRadius: '9999px',
                  border: 'none',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(255, 0, 0, 0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 16px rgba(255, 0, 0, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 0, 0, 0.3)';
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ flexShrink: 0 }}
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                YouTube ఛానల్‌ సబ్‌స్క్రైబ్ చేయండి
              </a>

              <p
                style={{
                  fontSize: 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
                  color: 'var(--neutral-600)',
                  textAlign: 'center',
                  fontStyle: 'italic',
                }}
              >
                🔔 గురువు గారి తాజా హవనాల నోటిఫికేషన్లు పొందండి
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
