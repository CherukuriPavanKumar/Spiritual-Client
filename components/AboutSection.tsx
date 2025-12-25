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
            యజ్ఞం గురించి
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
                సహస్రచండి యజ్ఞం అంటే ఏమిటి?
              </h3>
              <p
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  lineHeight: '2',
                  color: 'var(--neutral-600)',
                  marginBottom: 'var(--spacing-sm)',
                }}
              >
                సహస్రచండి యజ్ఞం అనేది దేవీ మహాత్మ్యం (దుర్గా సప్తశతి) ను వెయ్యిసార్లు
                పారాయణ చేసే అత్యంత శక్తివంతమైన వైదిక కార్యక్రమం. ఈ పవిత్ర యజ్ఞం ద్వారా
                జగన్మాత అమ్మవారి, దుర్గమ్మ దేవి యొక్క ఆశీర్వాదాలను పొందుతాము. రక్షణ,
                శ్రేయస్సు మరియు శాంతి లభిస్తాయి.
              </p>
              <p
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  lineHeight: '2',
                  color: 'var(--neutral-600)',
                }}
              >
                శివ సహస్రనామంతో (పరమేశ్వరుని వెయ్యి నామాలు) కలిపి చేయబడే ఈ యజ్ఞం
                ఆధ్యాత్మిక శక్తిని ప్రసరింపజేస్తుంది. విఘ్నాలను తొలగిస్తుంది మరియు
                పాల్గొనే భక్తులందరికీ దైవానుగ్రహం ప్రసాదిస్తుంది.
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
                ఆధ్యాత్మిక ప్రాముఖ్యత
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
                  'ప్రతికూల శక్తులను తొలగించి సానుకూల శక్తిని కలుగజేస్తుంది',
                  'ధైర్యం, బలం మరియు ఆధ్యాత్మిక రక్షణను ప్రసాదిస్తుంది',
                  'ఆరోగ్యం, సంపద మరియు సర్వ సంపూర్ణ శ్రేయస్సును కలుగజేస్తుంది',
                  'పరిసరాలను పవిత్రం చేసి దివ్య కంపనాలను సృష్టిస్తుంది',
                  'ధర్మబద్ధమైన కోరికలను మరియు ఆధ్యాత్మిక ఆకాంక్షలను నెరవేరుస్తుంది',
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
                ఎవరు పాల్గొనవచ్చు?
              </h3>
              <p
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  lineHeight: '2',
                  color: 'var(--neutral-600)',
                  marginBottom: 'var(--spacing-sm)',
                }}
              >
                నిజాయితీగల भక्తితో ఉన్న ప్రతి ఒక్కరూ ఈ పవిత్ర యజ్ఞంలో పాల్గొనవచ్చు.
                మీరు కోవిల్లో నేరుగా హాజరు కావచ్చు లేదా ఇంటి నుండి ఆన్‌లైన్ ద్వారా
                పాల్గొనవచ్చు. మీ ప్రార్థనలు మరియు సంకల్పాలు యజ్ఞంలో చేర్చబడతాయి.
              </p>
              <p
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  lineHeight: '2',
                  color: 'var(--neutral-600)',
                }}
              >
                కుటుంబ సభ్యులు కలిసి పాల్గొనవచ్చు మరియు ప్రియమైన వారి శ్రేయస్సు కోసం
                ప్రత్యేక ప్రార్థనలు చేయవచ్చు. సాంప్రదాయ వైదిక విధానాలను అనుసరించి
                విద్వాంసులైన పురోహితులు ఈ యజ్ఞాన్ని నిర్వహిస్తారు.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
