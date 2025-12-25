'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const AboutSection: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.6 },
  };

  return (
    <section
      style={{
        padding: 'var(--spacing-section) 0',
        background: 'white',
      }}
    >
      <div className="container">
        <motion.div
          {...fadeInUp}
          style={{
            maxWidth: '50rem',
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
              marginBottom: 'var(--spacing-xl)',
              lineHeight: '1.3',
            }}
          >
            About the Yajna
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

          {/* Content blocks */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2xl)' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.25rem, 1.1rem + 0.75vw, 1.625rem)',
                  fontWeight: '600',
                  color: 'var(--neutral-700)',
                  marginBottom: 'var(--spacing-md)',
                }}
              >
                What is the Sahasra Chandi Yajna?
              </h3>
              <p
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  lineHeight: '2',
                  color: 'var(--neutral-600)',
                  marginBottom: 'var(--spacing-sm)',
                }}
              >
                The Sahasra Chandi Yajna is a powerful Vedic ritual where the Devi
                Mahatmyam (Durga Saptashati) is recited one thousand times. This
                sacred ceremony invokes the blessings of the Divine Mother, Goddess
                Durga, to bring protection, prosperity, and peace.
              </p>
              <p
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  lineHeight: '2',
                  color: 'var(--neutral-600)',
                }}
              >
                Combined with the Shiva Sahasranama (thousand names of Lord Shiva),
                this yajna creates a harmonious spiritual energy that removes
                obstacles and bestows divine grace upon all participants.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                padding: 'var(--spacing-lg)',
                background: 'var(--cream-100)',
                borderRadius: '1rem',
                borderLeft: '4px solid var(--saffron-500)',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.25rem, 1.1rem + 0.75vw, 1.625rem)',
                  fontWeight: '600',
                  color: 'var(--neutral-700)',
                  marginBottom: 'var(--spacing-md)',
                }}
              >
                Spiritual Significance
              </h3>
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
                  'Removes negative influences and brings positive energy',
                  'Grants courage, strength, and spiritual protection',
                  'Promotes health, wealth, and overall well-being',
                  'Purifies the environment and creates divine vibrations',
                  'Fulfills righteous desires and spiritual aspirations',
                ].map((benefit, index) => (
                  <li
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                      lineHeight: '1.75',
                      color: 'var(--neutral-600)',
                    }}
                  >
                    <span
                      style={{
                        marginRight: 'var(--spacing-sm)',
                        color: 'var(--saffron-500)',
                        fontSize: '1.25rem',
                      }}
                    >
                      ✦
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.25rem, 1.1rem + 0.75vw, 1.625rem)',
                  fontWeight: '600',
                  color: 'var(--neutral-700)',
                  marginBottom: 'var(--spacing-md)',
                }}
              >
                Who Can Participate?
              </h3>
              <p
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  lineHeight: '2',
                  color: 'var(--neutral-600)',
                  marginBottom: 'var(--spacing-sm)',
                }}
              >
                Everyone with sincere devotion is welcome to participate in this
                sacred yajna. Whether you attend in person at the temple or join
                virtually from your home, your prayers and intentions will be
                included in the ceremony.
              </p>
              <p
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  lineHeight: '2',
                  color: 'var(--neutral-600)',
                }}
              >
                Families can participate together, and special prayers can be
                offered for the well-being of loved ones. The yajna is conducted
                by learned priests following traditional Vedic procedures.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
