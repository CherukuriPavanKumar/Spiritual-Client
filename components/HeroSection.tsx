'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';

interface HeroSectionProps {
  onRegisterClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onRegisterClick }) => {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, var(--cream-100) 0%, var(--cream-50) 100%)',
        paddingTop: 'var(--spacing-3xl)',
        paddingBottom: 'var(--spacing-3xl)',
      }}
    >
      {/* Subtle decorative element */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '20rem',
          height: '20rem',
          background: 'radial-gradient(circle, var(--saffron-100) 0%, transparent 70%)',
          opacity: 0.3,
          borderRadius: '50%',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{
            textAlign: 'center',
            maxWidth: '60rem',
            margin: '0 auto',
          }}
        >
          {/* Sacred symbol */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{
              marginBottom: 'var(--spacing-xl)',
              fontSize: '4rem',
              color: 'var(--saffron-500)',
            }}
          >
            🕉
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.25rem, 1.9rem + 1.75vw, 3.5rem)',
              fontWeight: '700',
              color: 'var(--neutral-700)',
              lineHeight: '1.3',
              marginBottom: 'var(--spacing-xl)',
              letterSpacing: '0.025em',
            }}
          >
            సహస్రచండి మరియు
            <br />
            శివ సహస్రనామ మహాయజ్ఞం
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            style={{
              fontSize: 'clamp(1.125rem, 1rem + 0.625vw, 1.375rem)',
              lineHeight: '2',
              color: 'var(--neutral-600)',
              maxWidth: '45rem',
              margin: '0 auto var(--spacing-2xl)',
              fontWeight: '400',
            }}
          >
            జగన్మాత అమ్మవారి మరియు పరమేశ్వరుని దివ్య ఆశీర్వాదాల కోసం
            నిర్వహించబడే పవిత్ర వైదిక యజ్ఞం. పాల్గొనే భక్తులందరికీ శాంతి,
            సంపద మరియు ఆధ్యాత్మిక ఉన్నతిని ప్రసాదించును.
          </motion.p>

          {/* Event details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 'var(--spacing-lg)',
              marginBottom: 'var(--spacing-2xl)',
              padding: 'var(--spacing-lg)',
              background: 'white',
              borderRadius: '1rem',
              boxShadow: 'var(--shadow-md)',
              maxWidth: '50rem',
              margin: '0 auto var(--spacing-2xl)',
            }}
          >
            <div style={{ textAlign: 'center', minWidth: '10rem' }}>
              <div
                style={{
                  fontSize: '2rem',
                  marginBottom: 'var(--spacing-xs)',
                }}
              >
                📅
              </div>
              <div
                style={{
                  fontSize: 'clamp(0.875rem, 0.8rem + 0.35vw, 1rem)',
                  color: 'var(--neutral-500)',
                  marginBottom: '0.25rem',
                }}
              >
                తేదీ
              </div>
              <div
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  fontWeight: '600',
                  color: 'var(--neutral-700)',
                }}
              >
                ఫిబ్రవరి 15-17, 2026
              </div>
            </div>

            <div style={{ textAlign: 'center', minWidth: '10rem' }}>
              <div
                style={{
                  fontSize: '2rem',
                  marginBottom: 'var(--spacing-xs)',
                }}
              >
                ⏰
              </div>
              <div
                style={{
                  fontSize: 'clamp(0.875rem, 0.8rem + 0.35vw, 1rem)',
                  color: 'var(--neutral-500)',
                  marginBottom: '0.25rem',
                }}
              >
                సమయం
              </div>
              <div
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  fontWeight: '600',
                  color: 'var(--neutral-700)',
                }}
              >
                ఉదయం 6:00 - సాయంత్రం 6:00
              </div>
            </div>

            <div style={{ textAlign: 'center', minWidth: '10rem' }}>
              <div
                style={{
                  fontSize: '2rem',
                  marginBottom: 'var(--spacing-xs)',
                }}
              >
                📍
              </div>
              <div
                style={{
                  fontSize: 'clamp(0.875rem, 0.8rem + 0.35vw, 1rem)',
                  color: 'var(--neutral-500)',
                  marginBottom: '0.25rem',
                }}
              >
                స్థలం
              </div>
              <div
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  fontWeight: '600',
                  color: 'var(--neutral-700)',
                }}
              >
                శ్రీ దేవి దేవాలయం హాలు
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <Button size="lg" onClick={onRegisterClick}>
              యజ్ఞంలో పాల్గొనడానికి నమోదు చేసుకోండి
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
