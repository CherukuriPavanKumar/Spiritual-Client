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
            కార్యక్రమ వివరాలు
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)' }}>
            {/* Venue Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                padding: 'var(--spacing-lg)',
                background: 'linear-gradient(135deg, var(--saffron-50) 0%, var(--gold-50) 100%)',
                borderRadius: '1rem',
                border: '2px solid var(--saffron-200)',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.25rem, 1.1rem + 0.75vw, 1.625rem)',
                  fontWeight: '600',
                  color: 'var(--neutral-700)',
                  marginBottom: 'var(--spacing-md)',
                  textAlign: 'center',
                }}
              >
                స్థలం
              </h3>
              <div style={{ textAlign: 'center' }}>
                <p
                  style={{
                    fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                    lineHeight: '2',
                    color: 'var(--neutral-600)',
                    marginBottom: 'var(--spacing-sm)',
                    maxWidth: 'none',
                    fontWeight: '600',
                  }}
                >
                  శివ శక్తి సన్నిధి
                </p>
                <p
                  style={{
                    fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                    lineHeight: '2',
                    color: 'var(--neutral-600)',
                    maxWidth: 'none',
                  }}
                >
                  Behind AVM Hotel, Sreenagar,<br />
                  Near ORR Exit No. 14, Tukkuguda,<br />
                  Hyderabad, Telangana – 501359
                </p>
                <a
                  href="https://maps.app.goo.gl/nEDsxQ9hveVmWBn99"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    marginTop: 'var(--spacing-md)',
                    padding: 'var(--spacing-sm) var(--spacing-md)',
                    background: 'var(--saffron-500)',
                    color: 'white',
                    borderRadius: '0.5rem',
                    textDecoration: 'none',
                    fontSize: 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
                    fontWeight: '500',
                    transition: 'background 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--saffron-600)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--saffron-500)';
                  }}
                >
                  📍 Google Maps లో చూడండి
                </a>
              </div>
            </motion.div>

            {/* Morning Programs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
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
                ఉదయ కార్యక్రమాలు (ఉ. 6:30 – మ. 2:00)
              </h3>
              <p
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  lineHeight: '2',
                  color: 'var(--neutral-600)',
                  marginBottom: 'var(--spacing-sm)',
                  maxWidth: 'none',
                  fontWeight: '600',
                }}
              >
                ఉ. 6:30 : చండీ హోమం
              </p>
              <p
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  lineHeight: '2',
                  color: 'var(--neutral-600)',
                  marginBottom: 'var(--spacing-sm)',
                  maxWidth: 'none',
                }}
              >
                సాధారణంగా ఇలాంటి మహా హోమాలు ఋత్వికులచే మాత్రమే నిర్వహించబడతాయి. కానీ ఈసారి అమ్మవారి మరియు స్వామివారి ఆజ్ఞ ప్రకారం, ఋత్వికులతో సమానంగా భక్తులే స్వయంగా మంత్రాలు ఉచ్చరిస్తూ, ఆహుతులు సమర్పిస్తూ ఈ మహా యజ్ఞంలో ప్రత్యక్షంగా పాల్గొంటారు.
              </p>
              <p
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  lineHeight: '2',
                  color: 'var(--neutral-600)',
                  marginBottom: 'var(--spacing-sm)',
                  maxWidth: 'none',
                }}
              >
                ఇది వైదిక సంప్రదాయ పునరుజ్జీవనానికి ప్రతీక.
                ఈ హవనాలలో పాల్గొనే ప్రతి భక్తుడికి సుమారు 10 కిలోల వైదికంగా సిద్ధం చేసిన హవన ద్రవ్యాలు అందజేయబడతాయి. వీటిలో ఉత్తమ ఔషధ ద్రవ్యాలు, నవధాన్యాలు, ఎండు ఫలాలు, సుగంధ ద్రవ్యాలు ఉంటాయి.
              </p>
              <p
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  lineHeight: '2',
                  color: 'var(--neutral-600)',
                  maxWidth: 'none',
                }}
              >
                భక్తులు దుర్గా సప్తశతి మంత్రోచ్చారణ చేస్తూ ఈ ద్రవ్యాలను అగ్నిసాక్షిగా హవన కుండాలలో సమర్పిస్తారు.
                ఈ సమన్వయంతో కర్మదహనం వేగవంతమై, వ్యక్తిగత జీవితంలో ఆరోగ్య మెరుగుదల, ఆర్థిక స్థిరత్వం, ఉద్యోగ–వ్యాపార పురోగతి, అవరోధ నివృత్తి, మనశ్శాంతి కలుగుతాయి.
              </p>
            </motion.div>

            {/* Evening Programs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                padding: 'var(--spacing-lg)',
                background: 'var(--cream-100)',
                borderRadius: '1rem',
                borderLeft: '4px solid var(--gold-500)',
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
                సాయంత్ర కార్యక్రమాలు
              </h3>
              <p
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  lineHeight: '2',
                  color: 'var(--neutral-600)',
                  marginBottom: 'var(--spacing-sm)',
                  maxWidth: 'none',
                  fontWeight: '600',
                }}
              >
                సా. 4:30 : సువాసిని పూజ
              </p>
              <p
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  lineHeight: '2',
                  color: 'var(--neutral-600)',
                  marginBottom: 'var(--spacing-md)',
                  maxWidth: 'none',
                }}
              >
                ఈ పూజ ద్వారా గృహ మంగళత్వం, వంశ శుద్ధి, శక్తి అనుగ్రహం మరియు సౌభాగ్య వృద్ధి కలుగుతాయి.
              </p>
              <p
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  lineHeight: '2',
                  color: 'var(--neutral-600)',
                  marginBottom: 'var(--spacing-sm)',
                  maxWidth: 'none',
                  fontWeight: '600',
                }}
              >
                సా. 6:00 : లింగ అవర్ణ సమేత రుద్ర హోమం
              </p>
              <p
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  lineHeight: '2',
                  color: 'var(--neutral-600)',
                  maxWidth: 'none',
                }}
              >
                ఈ హవనాలలో పాల్గొనే ప్రతి భక్తులు లింగ అవర్ణ చేసిన తరువాత భక్తులు శ్రీ రుద్రం మంత్రోచ్చారణ చేస్తూ ద్రవ్యాలను అగ్నిసాక్షిగా హవన కుండాలలో సమర్పిస్తారు.
                ఈ సమన్వయంతో కర్మదహనం వేగవంతమై, వ్యక్తిగత జీవితంలో ఆరోగ్య మెరుగుదల, ఆర్థిక స్థిరత్వం, ఉద్యోగ–వ్యాపార పురోగతి, అవరోధ నివృత్తి, మనశ్శాంతి కలుగుతాయి.
              </p>
            </motion.div>

            {/* Night Program */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{
                padding: 'var(--spacing-lg)',
                background: 'linear-gradient(135deg, var(--saffron-50) 0%, var(--gold-50) 100%)',
                borderRadius: '1rem',
                border: '2px solid var(--saffron-200)',
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
                రాత్రి కార్యక్రమం
              </h3>
              <p
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  lineHeight: '2',
                  color: 'var(--neutral-600)',
                  marginBottom: 'var(--spacing-sm)',
                  maxWidth: 'none',
                  fontWeight: '600',
                }}
              >
                రా. 9:00 : లక్ష దీపోస్త్వం
              </p>
              <p
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  lineHeight: '2',
                  color: 'var(--neutral-600)',
                  marginBottom: 'var(--spacing-md)',
                  maxWidth: 'none',
                }}
              >
                రా. 9:00 లక్ష దీపోత్సవం నిర్వహించబడుతుంది. లక్ష దీపాల ప్రజ్వలన అజ్ఞానాంధకార నివారణకు, అంతరాత్మ ప్రకాశానికి, లోకశాంతి స్థాపనకు మహత్తర సంకల్పంగా నిలుస్తుంది.
              </p>
              <p
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  lineHeight: '2',
                  color: 'var(--neutral-600)',
                  marginBottom: 'var(--spacing-sm)',
                  maxWidth: 'none',
                  fontWeight: '600',
                }}
              >
                రా. 10:00 – ఉ. 6:00 : శివ జాగరణ
              </p>
              <p
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  lineHeight: '2',
                  color: 'var(--neutral-600)',
                  marginBottom: 'var(--spacing-sm)',
                  maxWidth: 'none',
                  fontWeight: '600',
                }}
              >
                నాలుగు ప్రహరాల శివ జాగరణ – శివ దశసహస్రనామావళి హోమం
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--spacing-xs)',
                  marginBottom: 'var(--spacing-sm)',
                }}
              >
                {[
                  '1వ ప్రహరం – స్థూల కర్మ నివృత్తి',
                  '2వ ప్రహరం – మానసిక కర్మ శుద్ధి',
                  '3వ ప్రహరం – పూర్వజన్మ బీజ కర్మ దహనం (లింగోద్భవ కాలం)',
                  '4వ ప్రహరం – అహంకార–అవిద్య మూల కర్మ నివృత్తి',
                ].map((item, index) => (
                  <li
                    key={index}
                    style={{
                      fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                      lineHeight: '1.75',
                      color: 'var(--neutral-600)',
                      maxWidth: 'none',
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  lineHeight: '2',
                  color: 'var(--neutral-600)',
                  maxWidth: 'none',
                }}
              >
                1,000 మంది భక్తులు కలిసి ప్రత్యక్షంగా మరియు ఆన్‌లైన్ ద్వారా మరికొంత మంది భక్తులు కోటి శివనామ యజ్ఞ ఫలం పొందగలరు.
              </p>
            </motion.div>

            {/* Purnahuti */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{
                padding: 'var(--spacing-xl)',
                background: 'linear-gradient(135deg, var(--saffron-500) 0%, var(--gold-400) 100%)',
                borderRadius: '1rem',
                textAlign: 'center',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.25rem, 1.1rem + 0.75vw, 1.625rem)',
                  fontWeight: '600',
                  color: 'white',
                  marginBottom: 'var(--spacing-md)',
                }}
              >
                ఉ. 6:00 : పూర్ణాహుతి
              </h3>
              <p
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  lineHeight: '2',
                  color: 'rgba(255, 255, 255, 0.95)',
                  maxWidth: 'none',
                }}
              >
                మరుసటి రోజు ఉదయం ప్రతి హవన కుండం వద్ద శివయ్య మరియు అమ్మవారికి పట్టు వస్త్ర సమర్పణతో కూడిన పూర్ణాహుతి గురుమా తేజోమయి గారి సాన్నిధ్యంలో నిర్వహించబడుతుంది.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
