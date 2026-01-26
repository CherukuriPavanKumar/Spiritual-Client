'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ContributionsPage() {
  const sevaOptions = [
    {
      title: 'గోమాత సేవ',
      purpose: 'ఆరోగ్యం | సంతాన సమస్యలు | ప్రత్యేక అవసరాలున్న పిల్లలు | పూర్వజన్మ అడ్డంకులు',
    },
    {
      title: 'మరకత లింగ సేవ',
      purpose: 'జీవిత స్థిరత్వం | పునరావృత ఆటంకాల నివారణ',
    },
    {
      title: 'చండీ మహాయంత్ర సేవ',
      purpose: 'నెగటివ్ శక్తుల నుండి రక్షణ | ధైర్యం',
    },
    {
      title: 'రుద్రాక్ష సేవ',
      purpose: 'మనశ్శాంతి | భావోద్వేగ సమతుల్యత',
    },
    {
      title: 'హవన ద్రవ్య / ఆహుతి సేవ',
      purpose: 'మానసిక కలతలు | వ్యసనాలు | ఉద్యోగ / వ్యాపార అడ్డంకులు',
    },
    {
      title: 'హవన సమిధ సేవ',
      purpose: 'దీర్ఘకాల సమస్యల్లో ఓర్పు | నిలకడ',
    },
    {
      title: 'నెయ్యి సేవ (ఆహుతి & దీపం)',
      purpose: 'మనస్సు శుద్ధి | ఆరోగ్యం',
    },
    {
      title: 'అన్నదాన సేవ',
      purpose: 'దాంపత్య కలహాలు | కుటుంబ శాంతి',
    },
    {
      title: 'దీపోత్సవ సేవ',
      purpose: 'భయం | ఆందోళన | కెరీర్ స్థబ్దత',
    },
    {
      title: 'స్వామి–అమ్మవారి అలంకార / మండల సేవ',
      purpose: 'సంబంధాల సౌహార్దం | అనుగ్రహం',
    },
    {
      title: 'శివ నామావళి గ్రంథ సేవ',
      purpose: 'పిల్లల భవిష్యత్తు | తరతరాల పుణ్యఫలం',
    },
    {
      title: 'వేద శిక్షణ & జప సేవ',
      purpose: 'మనశ్శాంతి | ఏకాగ్రత',
    },
    {
      title: 'హోమకుండ నిర్మాణ సేవ',
      purpose: 'ఉద్యోగ స్థబ్దత | అప్పులు | జీవన స్థిరత్వం',
    },
    {
      title: 'హవన స్థల & మౌలిక వసతుల సేవ',
      purpose: 'లైటింగ్ | సౌండ్ | నీరు | బాత్రూములు (యజ్ఞం సజావుగా సాగేందుకు)',
    },
  ];

  return (
    <main style={{ minHeight: '100vh', background: 'var(--cream-50)' }}>
      {/* Header */}
      <div
        style={{
          padding: 'var(--spacing-xl) 0',
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
              marginBottom: 'var(--spacing-md)',
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
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
             హోమ్‌కు తిరిగి వెళ్ళండి
          </Link>
          <div
  style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }}
>
  <h1
    style={{
      fontFamily: 'var(--font-heading)',
      fontSize: 'clamp(2rem, 1.7rem + 1.5vw, 3rem)',
      fontWeight: '700',
      color: 'black',
      textAlign: 'center',
      lineHeight: '1.3',
    }}
  >
    సహస్ర రుద్ర, సహస్ర చండీ సహిత<br />
    కోటి శివ నామ మహా యజ్ఞము - లక్ష దీపోత్సవము
  </h1>

  <p
    style={{
      fontSize: 'clamp(1.125rem, 1rem + 0.625vw, 1.375rem)',
      lineHeight: '1.75',
      color: 'black',
      textAlign: 'center',
      marginTop: 'var(--spacing-md)',
      maxWidth: '800px', // 👈 IMPORTANT
    }}
  >
    సేవలో భాగస్వాములు కావడానికి, విరాళం అందించడానికి<br />
    మరియు స్వామి ఆశీస్సులు పొందడానికి ఆహ్వానం
  </p>
</div>

        </div>
      </div>

      {/* Content */}
      <div className="container" style={{ padding: 'var(--spacing-2xl) 0' }}>
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            maxWidth: '56rem',
            margin: '0 auto var(--spacing-3xl)',
            padding: 'var(--spacing-2xl)',
            background: 'white',
            borderRadius: '1rem',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
          }}
        >
            <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }}>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.5rem, 1.3rem + 1vw, 2rem)',
              fontWeight: '600',
              color: 'var(--saffron-700)',
              marginBottom: 'var(--spacing-lg)',
              textAlign: 'center',
            }}
          >
            మహాయజ్ఞం గురించి
          </h2>
          <p
            style={{
              fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
              lineHeight: '2',
              color: 'var(--neutral-600)',
              marginBottom: 'var(--spacing-md)',
              textAlign: 'center',
            }}
          >
            స్వామి–అమ్మవారి అనుగ్రహంతో వెయ్యి మందికిపైగా భక్తులు కుటుంబాలతో కలిసి<br/>ఈ మహాయజ్ఞం నిర్వహించబడుతోంది
          </p>
          </div>

          <div
            style={{
              padding: 'var(--spacing-lg)',
              background: 'var(--cream-50)',
              borderRadius: '0.75rem',
              marginBottom: 'var(--spacing-lg)',
            }}
          >
            <h3
              style={{
                fontSize: 'clamp(1.125rem, 1rem + 0.625vw, 1.375rem)',
                fontWeight: '600',
                color: 'var(--neutral-700)',
                marginBottom: 'var(--spacing-md)',
                textAlign: 'center',
              }}
            >
              ఈ మహాయజ్ఞంలో జరుగుతున్న ఆచరణలు:
            </h3>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--spacing-xs)',
                alignItems: 'center',
              }}
            >
              {[
                'కోటి శివ నామావళి హవనం',
                'సహస్ర రుద్ర హోమం',
                'సహస్ర చండీ హోమం',
              ].map((item, index) => (
                <li
                  key={index}
                  style={{
                    fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                    lineHeight: '1.75',
                    color: 'var(--neutral-600)',
                    paddingLeft: 'var(--spacing-lg)',
                    position: 'relative',
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      color: 'var(--saffron-600)',
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

          <div
            style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }}
          >
            <h3
              style={{
                fontSize: 'clamp(1.125rem, 1rem + 0.625vw, 1.375rem)',
                fontWeight: '600',
                color: 'var(--saffron-700)',
                marginBottom: 'var(--spacing-md)',
                textAlign: 'center',
              }}
            >
              స్వామి–అమ్మవారి ఆజ్ఞ:
            </h3>
            <p
              style={{
                fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                lineHeight: '2',
                color: 'var(--neutral-600)',
                textAlign: 'center',
              }}
            >
              భక్తులే స్వయంగా 12,000కు పైగా మంత్రాలను జపిస్తూ సహస్ర రుద్రం, సహస్ర చండీ, శివదస సహస్రనామావళితో ఈ మహాయజ్ఞాన్ని నిర్వహించాలి
            </p>
          </div>
        </motion.div>

        {/* Contribution Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            maxWidth: '56rem',
            margin: '0 auto var(--spacing-3xl)',
            padding: 'var(--spacing-2xl)',
            background: 'white',
            borderRadius: '1rem',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',     
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.5rem, 1.3rem + 1vw, 2rem)',
              fontWeight: '600',
              color: 'var(--saffron-700)',
              marginBottom: 'var(--spacing-lg)',
              textAlign: 'center',
              
            }}
          >
            సేవా భాగస్వామ్య విరాళం గురించి
          </h2>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-md)',
            }}
          >
            <p
              style={{
                fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                lineHeight: '2',
                color: 'var(--neutral-600)',
                textAlign: 'center',
              }}
            >
              <strong>ఒక్కో భక్తునికి వాస్తవ వ్యయం:</strong> సుమారు ₹25,000
            </p>
            <p
              style={{
                fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                lineHeight: '2',
                color: 'var(--neutral-600)',
                textAlign: 'center',
              }}
            >
              భక్తులకు భారంగా మారకూడదన్న స్వామి ఆదేశంతో<br/>
              హవనంలో ప్రత్యక్షంగా పాల్గొనే భక్తుల నుండి<br/>
              <strong style={{ color: 'var(--saffron-700)' }}>₹5,000ను పాల్గొనే సేవా భాగస్వామ్య విరాళంగా నిర్ణయించాం</strong>
            </p>
            <p
              style={{
                fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                lineHeight: '2',
                color: 'var(--neutral-600)',
                textAlign: 'center',
              }}
            >
              మిగిలిన సేవా వ్యయం<br/>
              విరాళాలు, స్పాన్సర్‌షిప్‌ల ద్వారా సమకూర్చబడుతుంది
            </p>
            <div
              style={{
                padding: 'var(--spacing-lg)',
                background: 'linear-gradient(135deg, var(--saffron-50) 0%, var(--gold-50) 100%)',
                borderRadius: '0.75rem',
                border: '2px solid var(--saffron-200)',
                textAlign: 'center',
              }}
            >
              <p
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  lineHeight: '2',
                  color: 'var(--saffron-700)',
                  fontWeight: '600',
                }}
              >
                ఆర్థిక ఇబ్బందులు ఉన్న భక్తులకు<br/>
                నిశ్శబ్దంగా సహాయం అందించబడుతుంది
              </p>
            </div>
          </div>
        </motion.div>

        {/* Seva Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            maxWidth: '75rem',
            margin: '0 auto var(--spacing-3xl)',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.875rem, 1.6rem + 1.375vw, 2.75rem)',
              fontWeight: '700',
              color: 'var(--neutral-700)',
              marginBottom: 'var(--spacing-md)',
              textAlign: 'center',
            }}
          >
            సేవలు & సంకల్పాలు
          </h2>
          <h5
            style={{
              fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
              lineHeight: '2',
              color: 'var(--neutral-600)',
              marginBottom: 'var(--spacing-2xl)',
              textAlign: 'center',
            }}
          >
            మీ ప్రార్థనకు దగ్గరైన సేవను ఎంచుకోండి
          </h5>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
              gap: 'var(--spacing-lg)',
            }}
          >
            {sevaOptions.map((seva, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                style={{
                  padding: 'var(--spacing-lg)',
                  background: 'white',
                  borderRadius: '0.75rem',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
                  border: '2px solid var(--cream-100)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--saffron-300)';
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(217, 119, 6, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--cream-100)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(1.125rem, 1rem + 0.625vw, 1.375rem)',
                    fontWeight: '600',
                    color: 'var(--saffron-700)',
                    marginBottom: 'var(--spacing-sm)',
                  }}
                >
                  {seva.title}
                </h3>
                <p
                  style={{
                    fontSize: 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
                    lineHeight: '1.75',
                    color: 'var(--neutral-600)',
                  }}
                >
                  {seva.purpose}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            maxWidth: '56rem',
            margin: '0 auto var(--spacing-3xl)',
            padding: 'var(--spacing-2xl)',
            background: 'linear-gradient(135deg, var(--cream-100) 0%, var(--gold-50) 100%)',
            borderRadius: '1rem',
            border: '2px solid var(--saffron-200)',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.5rem, 1.3rem + 1vw, 2rem)',
              fontWeight: '600',
              color: 'var(--saffron-700)',
              marginBottom: 'var(--spacing-lg)',
              textAlign: 'center',
            }}
          >
            ముఖ్య గమనిక
          </h2>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-sm)',
              alignItems: 'center',
            }}
          >
            {[
              'అన్ని సేవలు వ్యక్తిగత సంకల్పంతో స్వీకరించబడతాయి',
              'సేవదారుల పేర్లు హవన సంకల్పంలో చేర్చబడతాయి',
              'ఫలితం ఎల్లప్పుడూ ఈశ్వర సంకల్పానుసారమే',
            ].map((item, index) => (
              <li
                key={index}
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  lineHeight: '2',
                  color: 'var(--neutral-700)',
                  paddingLeft: 'var(--spacing-lg)',
                  position: 'relative',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    left: 0,
                    color: 'var(--saffron-600)',
                    fontWeight: '600',
                    fontSize: '1.25rem',
                  }}
                >
                  ✦
                </span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* For Those Who Cannot Attend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{
            maxWidth: '56rem',
            margin: '0 auto var(--spacing-3xl)',
            padding: 'var(--spacing-2xl)',
            background: 'white',
            borderRadius: '1rem',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.5rem, 1.3rem + 1vw, 2rem)',
              fontWeight: '600',
              color: 'var(--neutral-700)',
              marginBottom: 'var(--spacing-lg)',
              
            }}
          >
            హాజరుకాలేని వారికి
          </h2>
          <p
            style={{
              fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
              lineHeight: '2',
              color: 'var(--neutral-600)',
              marginBottom: 'var(--spacing-md)',
            }}
          >
            హాజరుకాలేని వారు కూడా<br/>
            YouTube ద్వారా ఉచితంగా పాల్గొనవచ్చు<br/>
            ప్రార్థనలు వారికీ చేరుతాయి
          </p>
        </motion.div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{
            maxWidth: '56rem',
            margin: '0 auto var(--spacing-2xl)',
            padding: 'var(--spacing-3xl)',
            background: 'linear-gradient(135deg, var(--saffron-500) 0%, var(--gold-500) 100%)',
            borderRadius: '1rem',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
            textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

          }}
        >
          <p
            style={{
              fontSize: 'clamp(1.125rem, 1rem + 0.625vw, 1.375rem)',
              lineHeight: '2',
              color: 'black',
              fontWeight: '500',
              marginBottom: 'var(--spacing-lg)',
            }}
          >
            ఈ మహా శివరాత్రి మనము ఏమి కోరుకుంటామన్నదానికన్న<br/>
            మనము కలిసి ఏమి సమర్పిస్తున్నామో గుర్తు చేసే సందర్భంగా మారుగాక
          </p>
          <p
            style={{
              fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
              lineHeight: '1.75',
              color: 'black',
              fontStyle: 'italic',
            }}
          >
            స్వామి–అమ్మవారి చరణారవిందముల వద్ద
          </p>
        </motion.div>

        {/* Payment Button */}
        <div style={{ textAlign: 'center', marginTop: 'var(--spacing-2xl)' }}>
          <a
            href="https://pages.razorpay.com/stores/contribution"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: 'clamp(var(--spacing-md), 2vw, var(--spacing-lg)) clamp(var(--spacing-2xl), 4vw, var(--spacing-3xl))',
              background: 'linear-gradient(135deg, var(--saffron-500) 0%, var(--gold-500) 100%)',
              color: 'white',
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.125rem, 1rem + 0.625vw, 1.375rem)',
              fontWeight: '600',
              borderRadius: '9999px',
              textDecoration: 'none',
              boxShadow: '0 8px 24px rgba(217, 119, 6, 0.3)',
              transition: 'all 0.3s ease',
              backgroundColor: 'black',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(217, 119, 6, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(217, 119, 6, 0.3)';
            }}
          >
            💳 విరాళం అందించండి
          </a>
        </div>
      </div>
    </main>
  );
}
