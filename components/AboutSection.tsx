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
                శివరాత్రి ఉదయం – సహస్ర చండీ హోమం (శక్తి స్థాపన)
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
                శివరాత్రి రోజున ప్రాతఃకాలంలో సహస్ర చండీ హోమం నిర్వహించబడుతుంది. వైదిక సంప్రదాయం ప్రకారం,
                శివారాధనకు ముందు శక్తి తత్త్వాన్ని ఉద్దీపితం చేయుట అత్యంత అవసరం. దుర్గా సప్తశతి ప్రకారం,
                చండీ దేవి కర్మఫల నియంత్రిణి, ఋణ విమోచినీ, అవరోధ నాశినీ. కాబట్టి శివరాత్రి ఉదయమే చండీ హోమం నిర్వహించడం ద్వారా యజ్ఞక్షేత్రం శక్తిమంతమవుతుంది, అగ్ని దేవత శుద్ధి చెందుతుంది,
                మరియు తదుపరి జరిగే శివ సంబంధ హవనాలకు పూర్ణాధికారం సిద్ధమవుతుంది.
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
                ఈ సహస్ర చండీ హోమం ద్వారా
              </p>
              <ul
                style={{
                  listStyle: 'disc',
                  paddingLeft: 'var(--spacing-lg)',
                  margin: '0 0 var(--spacing-sm) 0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--spacing-xs)',
                }}
              >
                {[
                  'దీర్ఘకాల కర్మబంధనాలు శమిస్తాయి',
                  'ఋణబాధలు, దోషాలు నివృత్తి చెందుతాయి',
                  'కుటుంబ–వంశ అవరోధాలు సడలిపోతాయి',
                  'శక్తి అనుగ్రహంతో శివారాధన ఫలం పూర్ణమవుతుంది',
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
                ఈ విధంగా ఉదయపు సహస్ర చండీ హోమం
                ఈ మహా యజ్ఞానికి శక్తి మూలంగా నిలిచి,
                సాయంత్రం మరియు రాత్రి జరిగే
                సహస్ర రుద్ర చండీ హవనం,
                శివ దశసహస్రనామ హోమం,
                నాలుగు ప్రహరాల జగరణకు
                అదృశ్య శక్తి పునాది వేస్తుంది.
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
                సాయంత్ర ఆరంభం – సువాసిని పూజ (మంగళ సంకల్ప స్థాపన)
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
                శివరాత్రి సాయంత్రం, మహా హోమాలు మరియు జాగరణ ప్రారంభానికి ముందు
                సువాసిని పూజతో కార్యక్రమం ఆరంభించబడుతుంది.
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
                వైదిక సంప్రదాయం ప్రకారం, సువాసిని పూజ మంగళత్వానికి, గృహశాంతికి, వంశ రక్షణకు ప్రతీక.
                ఈ పూజ ద్వారా స్త్రీశక్తి ఆశీర్వాదం యజ్ఞంలో స్థాపించబడుతుంది, మరియు తదుపరి జరిగే సహస్ర రుద్ర హోమం, శివ దశసహస్రనామ హోమాలకు మంగళ సంకల్పం సిద్ధమవుతుంది.
              </p>
              <p
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  lineHeight: '2',
                  color: 'var(--neutral-600)',
                  maxWidth: 'none',
                }}
              >
                సువాసినులు జగన్మాత ప్రతిరూపాలుగా భావింపబడతారు. వారి ఆశీర్వాదంతో ప్రారంభమైన యజ్ఞం అవరోధ రహితంగా, ఫలప్రదంగా, లోక కల్యాణార్థంగా సంపూర్ణమవుతుందని శాస్త్రోక్త విశ్వాసం.
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
                <li
                  style={{
                    fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                    lineHeight: '1.75',
                    color: 'var(--neutral-600)',
                    maxWidth: 'none',
                  }}
                >
                  1వ ప్రహరం – స్థూల కర్మ నివృత్తి<br />
                  <span style={{ paddingLeft: 'var(--spacing-lg)', display: 'block' }}>
                    (శరీర, ఆరోగ్యం, జీవనోపాధి, భౌతిక అవరోధాల శుద్ధి).
                  </span>
                </li>
                <li
                  style={{
                    fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                    lineHeight: '1.75',
                    color: 'var(--neutral-600)',
                    maxWidth: 'none',
                  }}
                >
                  2వ ప్రహరం – మానసిక కర్మ శుద్ధి<br />
                  <span style={{ paddingLeft: 'var(--spacing-lg)', display: 'block' }}>
                    (భయం, కోపం, బాధ, బాంధవ్యాల్లోని అవరోధాల శుద్ధి).
                  </span>
                </li>
                <li
                  style={{
                    fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                    lineHeight: '1.75',
                    color: 'var(--neutral-600)',
                    maxWidth: 'none',
                  }}
                >
                  3వ ప్రహరం – పూర్వజన్మ బీజ కర్మ దహనం (లింగోద్భవ కాలం)<br />
                  <span style={{ paddingLeft: 'var(--spacing-lg)', display: 'block' }}>
                    బీజ కర్మ దహనం | పూర్వజన్మ కర్మల నాశనం.
                  </span><br />
                  <span style={{ paddingLeft: 'var(--spacing-lg)', display: 'block' }}>
                    కోటి జన్మల పాపాలను కూడా దహనం చేస్తుందని పౌరాణిక సిద్ధాంతం.
                  </span>
                </li>
                <li
                  style={{
                    fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                    lineHeight: '1.75',
                    color: 'var(--neutral-600)',
                    maxWidth: 'none',
                  }}
                >
                  4వ ప్రహరం – అహంకార–అవిద్య మూల కర్మ నివృత్తి (మోక్ష సాధనకు ద్వారం).<br />
                  <span style={{ paddingLeft: 'var(--spacing-lg)', display: 'block' }}>
                    ఈ ప్రహరంలో జాగరణ చేసినవాడు శివసాన్నిధ్యాన్ని అనుభవిస్తారు.
                  </span>
                </li>
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
