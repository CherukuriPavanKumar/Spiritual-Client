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
            శివతత్త్వ సారాంశం
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
            {/* Shiva Tattva Introduction */}
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
                  marginBottom: 'var(--spacing-sm)',
                  maxWidth: 'none',
                }}
              >
                శివుడు కర్మకు సాక్షి, కర్మఫలదాత, కర్మవిమోచకుడు.
                వేదాలు, ఉపనిషత్తులు, శివ–లింగ–స్కంద పురాణాలు ప్రకటించిన శాశ్వత సత్యం ఇదే.
                కర్మబంధనాల విమోచనకు, జీవిత అవరోధాల నివృత్తికి
                శివారాధనకన్నా శ్రేష్ఠమైన మార్గం లేదని శాస్త్రసిద్ధం.
              </p>
              <p
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  lineHeight: '2',
                  color: 'var(--neutral-600)',
                  maxWidth: 'none',
                }}
              >
                ఈ శివతత్త్వం భూలోకానికి అత్యంత సన్నిహితంగా వ్యక్తమయ్యే పవిత్ర కాలమే
                మహా శివరాత్రి.
              </p>
            </motion.div>

            {/* Maha Shivaratri Section */}
            {/* Maha Shivaratri Section */}
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
                మహా శివరాత్రి – వైదిక సాధనారాత్రి
              </h3>
              <p
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  lineHeight: '2',
                  color: 'var(--neutral-600)',
                  marginBottom: 'var(--spacing-sm)',
                  maxWidth: 'none',
                }}
              >
                మహా శివరాత్రి ఒక రాత్రి పండుగ మాత్రమే కాదు.
                ఇది ప్రాతఃకాలం నుండి మరుసటి రోజు ఉదయం వరకు సాగిన
                సంపూర్ణ శివసాధన మరియు యజ్ఞానుభవం.
              </p>
              <p
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  lineHeight: '2',
                  color: 'var(--neutral-600)',
                  maxWidth: 'none',
                }}
              >
                వైదిక సంప్రదాయం ప్రకారం ఈ సాధన
                శివతత్త్వ స్థాపన → శక్తి ఉద్దీపన → అగ్నిద్వారా కర్మదహనం → జాగరణ ద్వారా విమోచనం
                అనే శాస్త్రోక్త క్రమంలో నిర్వహించబడాలి.
                ఈ మహా యజ్ఞం అదే క్రమాన్ని పునరుజ్జీవిస్తోంది.
              </p>
            </motion.div>

            {/* Morning Programs */}
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
                ఉదయ కార్యక్రమాలు
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
                ఉ. 8:00 – ఉ. 11:00 : లింగ ఆవరణ పూజ, అభిషేకం 
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
                ఈ అభిషేకం ద్వారా పంచభూత శుద్ధి జరిగి,
                శివసాన్నిధ్యం స్థాపించబడుతుంది
                మరియు హవనాధికార సిద్ధి కలుగుతుంది.
              </p>
              <p
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  lineHeight: '2',
                  color: 'var(--neutral-600)',
                  maxWidth: 'none',
                }}
              >
                ఈ మహా యజ్ఞంలో నమోదు చేసుకున్న ప్రతి భక్తుడికి
                మరకత శివలింగం ప్రసాదంగా అందజేయబడుతుంది.
                భక్తులు స్వయంగా ఈ శివలింగానికి అభిషేకం చేస్తూ,
                ఋత్వికులు శివయ్య ఆవరణ పూజ నిర్వహిస్తున్న సమయంలో
                శివసాన్నిధ్యాన్ని ప్రత్యక్షంగా అనుభవిస్తారు.
                <br/><br/>
                ఇది దర్శన పరిమితిని దాటి,
                శివావరణ ఉపాసనలో భక్తుడిని ప్రత్యక్ష భాగస్వామిగా నిలబెట్టే వైదిక విధానం.
              </p>
            </motion.div>

            {/* Suvasini Section */}
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
                ఉ. 11:30 నుండి : సువాసిని పూజ
              </h3>
              <p
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  lineHeight: '2',
                  color: 'var(--neutral-600)',
                  maxWidth: 'none',
                }}
              >
                ఈ పూజ ద్వారా
                గృహ మంగళత్వం, వంశ శుద్ధి,
                శక్తి అనుగ్రహం మరియు సౌభాగ్య వృద్ధి కలుగుతాయి.
              </p>
            </motion.div>

            {/* Afternoon Programs */}
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
                మధ్యాహ్న కార్యక్రమాలు (మ. 2:00 – మ. 3:30)
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
                చండీ నవావరణ & వారాహిమాత అష్టోత్తర శతనామ కుంకుమార్చన
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
                ఈ శక్తి ఉపాసన ద్వారా
                కర్మ నివృత్తి, ఋణ విమోచన,
                భయ నివారణ, రక్షణ మరియు అంతర్గత శక్తి వృద్ధి కలుగుతాయి.
              </p>
              <p
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  lineHeight: '2',
                  color: 'var(--neutral-600)',
                  maxWidth: 'none',
                }}
              >
                ఈ మహా యజ్ఞంలో నమోదు చేసుకున్న ప్రతి భక్తుడికి
                శ్రీ మహా చండీ ఆవరణ యంత్రం ప్రసాదంగా అందజేయబడుతుంది.
                ఋత్వికులు అమ్మవారి ఆవరణ పూజ నిర్వహిస్తుండగా,
                భక్తులు తమ తమ స్థలాలలో
                ఈ యంత్రంపై కుంకుమార్చన చేస్తూ
                శక్తి ఉపాసనలో సమాన భాగస్వాములవుతారు.
                <br/><br/>
                ఈ విధానం ద్వారా
                అమ్మవారి ఆవరణ పూజ ఫలం
                ప్రత్యక్షంగా భక్తుడి జీవితంలోకి ప్రవేశిస్తుందని
                శాస్త్రోక్త విశ్వాసం.
              </p>
            </motion.div>

            {/* Evening Programs */}
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
                సాయంత్ర కార్యక్రమాలు (సా. 4:00 నుండి)
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
                సహస్ర రుద్ర, సహస్ర చండీ సహిత కోటి శివ నామ యజ్ఞం హోమం - లక్ష దీపోత్సవం
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
                సాధారణంగా ఇలాంటి మహా హోమాలు
                ఋత్వికులచే మాత్రమే నిర్వహించబడతాయి.
                కానీ ఈసారి అమ్మవారి మరియు స్వామివారి ఆజ్ఞ ప్రకారం,
                ఋత్వికులతో సమానంగా
                భక్తులే స్వయంగా మంత్రాలు ఉచ్చరిస్తూ,
                ఆహుతులు సమర్పిస్తూ
                ఈ మహా యజ్ఞంలో ప్రత్యక్షంగా పాల్గొంటారు.
                <br/><br/>
                ఇది వైదిక సంప్రదాయ పునరుజ్జీవనానికి ప్రతీక.
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
                ఈ హవనాలలో పాల్గొనే ప్రతి భక్తుడికి
                సుమారు 10 కిలోల వైదికంగా సిద్ధం చేసిన హవన ద్రవ్యాలు అందజేయబడతాయి.
                వీటిలో ఉత్తమ ఔషధ ద్రవ్యాలు, నవధాన్యాలు,
                ఎండు ఫలాలు, సుగంధ ద్రవ్యాలు ఉంటాయి.
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
                భక్తులు
                శ్రీ రుద్రం, దుర్గా సప్తశతి, శివ దశసహస్రనామావళి
                మంత్రోచ్చారణ చేస్తూ
                ఈ ద్రవ్యాలను అగ్నిసాక్షిగా హవన కుండాలలో సమర్పిస్తారు.
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
                ఈ సమన్వయంతో
                కర్మదహనం వేగవంతమై,
                వ్యక్తిగత జీవితంలో
                ఆరోగ్య మెరుగుదల, ఆర్థిక స్థిరత్వం,
                ఉద్యోగ–వ్యాపార పురోగతి,
                అవరోధ నివృత్తి, మనశ్శాంతి కలుగుతాయి.
              </p>
              <p
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  lineHeight: '2',
                  color: 'var(--neutral-600)',
                  maxWidth: 'none',
                }}
              >
                అదే సమయంలో
                లక్ష దీపోత్సవం నిర్వహించబడుతుంది.
                లక్ష దీపాల ప్రజ్వలన
                అజ్ఞానాంధకార నివారణకు,
                అంతరాత్మ ప్రకాశానికి,
                లోకశాంతి స్థాపనకు మహత్తర సంకల్పంగా నిలుస్తుంది.
              </p>
            </motion.div>

            {/* Night Program */}
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
                రాత్రి కార్యక్రమం – శివ జాగరణ (సా. 6:00 – ఉ. 6:00)
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
                1,000 మంది భక్తులు కలిసి
                ప్రత్యక్షంగా మరియు ఆన్‌లైన్ ద్వారా మరికొంత మంది భక్తులు
                కోటి శివనామ యజ్ఞ ఫలం పొందగలరు.
              </p>
            </motion.div>

            {/* Purnahuti */}
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
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.25rem, 1.1rem + 0.75vw, 1.625rem)',
                  fontWeight: '600',
                  color: 'white',
                  marginBottom: 'var(--spacing-md)',
                }}
              >
                పూర్ణాహుతి
              </h3>
              <p
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  lineHeight: '2',
                  color: 'rgba(255, 255, 255, 0.95)',
                  maxWidth: 'none',
                }}
              >
                మరుసటి రోజు ఉదయం
                ప్రతి హవన కుండం వద్ద
                శివయ్య మరియు అమ్మవారికి
                పట్టు వస్త్ర సమర్పణతో కూడిన పూర్ణాహుతి
                గురుమా తేజోమయి గారి సాన్నిధ్యంలో నిర్వహించబడుతుంది.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
