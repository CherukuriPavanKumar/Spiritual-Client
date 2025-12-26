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
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  lineHeight: '2',
                  color: 'var(--neutral-600)',
                  marginBottom: 'var(--spacing-md)',
                }}
              >
                సామాన్యంగా లోకంలో సహస్ర చండీ హవనం మరియు శివ దశసహస్రనామలాంటి గొప్ప హోమాలు ఋత్వికుల చేత నిర్వహించబడతాయి. 
                ఋత్వికులు "స్వాహా" అనగా భక్తులు హోమంలో ఆహుతులు సమర్పిస్తారు.
              </p>
              <p
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  lineHeight: '2',
                  color: 'var(--neutral-600)',
                  marginBottom: 'var(--spacing-md)',
                  fontWeight: '500',
                }}
              >
                కానీ ఈసారి మాత్రం ఋత్వికులతో సమానంగా భక్తులు కూడా మంత్రాలు ఉచ్చరిస్తూ, హవనంలో ప్రత్యక్షంగా లేదా పరోక్షంగా పాల్గొనవలసిందిగా అమ్మ, స్వామివార్ల వారి ఆదేశం.
              </p>
              <p
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  lineHeight: '2',
                  color: 'var(--neutral-600)',
                }}
              >
                వారి ఆజ్ఞని అనుసరిస్తూ,  హోమ మండపంలో <strong>100 మంది భక్తులు ప్రత్యక్షంగా</strong> మరియు <strong>900 మంది భక్తులు ఆన్‌లైన్ ద్వారా పరోక్షంగా</strong> ఒకేసారి ఏకధాటిగా పాల్గొంటారు. ఈ విధంగా మొత్తం <strong>1,000 మంది భక్తులు</strong> కలిసి, సహస్ర చండీ హవనం మరియు శివ దశసహస్రనామ హోమ నిర్వహిస్తారు.
              </p>
            </motion.div>

            {/* Upadesha Details */}
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
                ఉపదేశం యొక్క వివరాలు
              </h3>
              <p
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  lineHeight: '2',
                  color: 'var(--neutral-600)',
                  marginBottom: 'var(--spacing-md)',
                }}
              >
                ఈ హవనంలో పాల్గొనే మొత్తం 1,000 మంది భక్తులకు, శివ దశసహస్రనామావళి ఉచ్చారణపై శిక్షణ ఇవ్వబడుతుంది.
              </p>
              <p
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  lineHeight: '2',
                  color: 'var(--neutral-600)',
                  marginBottom: 'var(--spacing-md)',
                }}
              >
                అలాగే, అమ్మవారు స్వయంగా ఉపదేశించిన విధానానుసారంగా, కర్మ నివృత్తి మరియు ఋణ విమోచన కోసం, నవాంగ క్రమంలో సప్తశతి పారాయణ విధానం సంపూర్ణంగా బోధించబడుతుంది.
              </p>
              <p
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  lineHeight: '2',
                  color: 'var(--neutral-600)',
                }}
              >
                ప్రత్యక్షంగా లేదా పరోక్షంగా పాల్గొనే భక్తులకు, ఆధ్యాత్మిక శక్తి (ఊర్జ) వృద్ధి చెందుటకై, స్వామివారి ఆజ్ఞ ప్రకారం గురు మంత్ర దీక్ష ఇవ్వబడుతుంది.
              </p>
            </motion.div>

            {/* Shivaratri Program */}
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
                శివరాత్రి రోజు జరిగే కార్యక్రమ వివరాలు
              </h3>
              <p
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  lineHeight: '2',
                  color: 'var(--neutral-600)',
                }}
              >
                శివరాత్రి రోజు ఉదయం, భక్తులచే అభిషేకం మరియు ఆవరణ పూజల అనంతరం, జాగరణలో భాగంగా శివ దశసహస్రనామ హోమం నిర్వహించబడుతుంది.
              </p>
            </motion.div>

            {/* Teaching Schedule */}
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
                ఉపదేశ ప్రణాళిక
              </h3>
              <p
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  lineHeight: '2',
                  color: 'var(--neutral-600)',
                  marginBottom: 'var(--spacing-md)',
                }}
              >
                హవనానికి సిద్ధమయ్యేందుకు క్రింది విధంగా ఉపదేశ కార్యక్రమం నిర్వహించబడుతుంది:
              </p>
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
                  { period: 'జనవరి 10 – జనవరి 18', topic: 'శ్రీ రుద్రం' },
                  { period: 'జనవరి 19 – జనవరి 29', topic: 'సప్తశతి పారాయణ' },
                  { period: 'జనవరి 30 – ఫిబ్రవరి 10', topic: 'శివ దశసహస్రనామావళి' },
                ].map((item, index) => (
                  <li
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                      lineHeight: '1.75',
                      color: 'var(--neutral-700)',
                      padding: 'var(--spacing-sm)',
                      background: 'white',
                      borderRadius: '0.5rem',
                    }}
                  >
                    <span
                      style={{
                        marginRight: 'var(--spacing-md)',
                        color: 'var(--saffron-600)',
                        fontSize: '1.25rem',
                        fontWeight: '600',
                      }}
                    >
                      📅
                    </span>
                    <div>
                      <div style={{ fontWeight: '600' }}>{item.period}</div>
                      <div style={{ color: 'var(--neutral-600)' }}>{item.topic}</div>
                    </div>
                  </li>
                ))}
              </ul>
              <p
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  lineHeight: '2',
                  color: 'var(--neutral-600)',
                  marginTop: 'var(--spacing-md)',
                  fontStyle: 'italic',
                }}
              >
                ఈ ఉపదేశాన్ని గురు తేజోమయి గారు అందిస్తారు.
              </p>
            </motion.div>

            {/* Book Publication */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
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
                గ్రంథ ప్రచురణ
              </h3>
              <p
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  lineHeight: '2',
                  color: 'var(--neutral-600)',
                }}
              >
                స్వామివారి చేత సరిచేయబడి, దిద్దుబాట్లు చేసి ఆమోదింపబడిన శివ దశసహస్రనామావళి పుస్తకము 20,000 ప్రతులు ముద్రించబడతాయి. ఈ ప్రతులు వివిధ దేవాలయాలలో పంపిణీ చేయబడతాయి మరియు ఉపదేశానికి, ఈ గ్రంథాన్ని ప్రామాణికంగా ఉపయోగించడం జరుగుతుంది.
              </p>
            </motion.div>

            {/* Prasadam */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
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
                ప్రసాదం మరియు సేవ
              </h3>
              <p
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  lineHeight: '2',
                  color: 'var(--neutral-600)',
                }}
              >
                సహస్ర చండీ హోమం మరియు శివ దశసహస్రనామావళి హవనంలో పాల్గొనేందుకు నమోదు చేసుకునే ప్రతి భక్తుడికి, లేదా రూ. 10,000/- కంటే ఎక్కువ ఆర్థిక సహకారం అందించే భక్తుల శ్రేయస్సు, రక్షణ మరియు సంపద వృద్ధి కొరకు, మరకత శివలింగం మరియు శ్రీ మహా చండీ యంత్రం ప్రసాదంగా అందజేయబడతాయి.
              </p>
            </motion.div>

            {/* Guru Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
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
                గురు పరిచయం
              </h3>
              <p
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  lineHeight: '2',
                  color: 'var(--neutral-600)',
                  marginBottom: 'var(--spacing-md)',
                }}
              >
                గురు తేజోమయి గారు లోక శ్రేయస్సు మరియు లోక కళ్యాణం కొరకు ఇప్పటివరకు 160కు పైగా హోమాలు నిర్వహించారు. వాటిలో 64కు పైగా రుద్ర చండీ హవనాలు ఉన్నాయి. శివరాత్రి నాటికి, గురుమా నిరంతరంగా 100 రోజుల రుద్ర చండీ హవన సాధన పూర్తి చేస్తారు.
              </p>
              <p
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  lineHeight: '2',
                  color: 'var(--neutral-600)',
                }}
              >
                అమ్మవారి మరియు స్వామివారి ఆజ్ఞ ప్రకారం, ఈ సమస్త హవనాల ద్వారా పోగుచేసిన/ఆర్జించిన పుణ్య ఫలాన్ని ప్రపంచ శాంతి మరియు శ్రేయస్సు కొరకు కామాఖ్యా దేవి మరియు కంచి కామాక్షి అమ్మవారి ఆలయాలలో ధారపోస్తారు.
              </p>
            </motion.div>

            {/* Final Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
              style={{
                padding: 'var(--spacing-xl)',
                background: 'linear-gradient(135deg, var(--saffron-500) 0%, var(--gold-400) 100%)',
                borderRadius: '1rem',
                textAlign: 'center',
              }}
            >
              <p
                style={{
                  fontSize: 'clamp(1.125rem, 1rem + 0.625vw, 1.375rem)',
                  lineHeight: '2',
                  color: 'white',
                  fontWeight: '600',
                  marginBottom: 'var(--spacing-md)',
                }}
              >
                ప్రపంచంలోనే ఎక్కడా లేని విధంగా ఒకేసారి 1,000 మంది భక్తులు కలిసి పవిత్ర మంత్రాలు ఉచ్చరిస్తూ హోమాన్ని నిర్వహించే అపూర్వ ఘట్టం ఇది.
              </p>
              <p
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  lineHeight: '2',
                  color: 'rgba(255, 255, 255, 0.95)',
                }}
              >
                కావున మీ పేర్లు నమోదు చేసుకొని, సేవలో పాల్గొని, ఆ జగన్మాత మరియు శివయ్య కృపకు పాత్రులు కాగలరని మనవి.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
