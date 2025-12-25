'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';

interface SuccessScreenProps {
  registrationData: {
    fullName: string;
    email: string;
    mobile: string;
    participationMode: 'in-person' | 'online';
  };
  onClose: () => void;
}

export const SuccessScreen: React.FC<SuccessScreenProps> = ({
  registrationData,
  onClose,
}) => {
  // Get WhatsApp group link based on participation mode
  const whatsappLink = registrationData.participationMode === 'in-person'
    ? process.env.NEXT_PUBLIC_WHATSAPP_IN_PERSON_GROUP
    : process.env.NEXT_PUBLIC_WHATSAPP_ONLINE_GROUP;

  const groupName = registrationData.participationMode === 'in-person'
    ? 'In-Person Participants'
    : 'Online Participants';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, var(--cream-100) 0%, var(--cream-50) 100%)',
        padding: 'var(--spacing-xl)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        style={{
          maxWidth: '40rem',
          background: 'white',
          borderRadius: '1.5rem',
          padding: 'var(--spacing-3xl) var(--spacing-2xl)',
          boxShadow: 'var(--shadow-xl)',
          textAlign: 'center',
        }}
      >
        {/* Animated icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.3,
            type: 'spring',
            stiffness: 200,
            damping: 15,
          }}
          style={{
            width: '6rem',
            height: '6rem',
            margin: '0 auto var(--spacing-xl)',
            background: 'linear-gradient(135deg, var(--saffron-500), var(--gold-400))',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '3rem',
          }}
        >
          ✓
        </motion.div>

        {/* Success message */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.875rem, 1.6rem + 1.375vw, 2.5rem)',
            fontWeight: '600',
            color: 'var(--neutral-700)',
            marginBottom: 'var(--spacing-lg)',
            lineHeight: '1.3',
          }}
        >
          Registration Complete
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          style={{
            marginBottom: 'var(--spacing-2xl)',
          }}
        >
          <p
            style={{
              fontSize: 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)',
              lineHeight: '2',
              color: 'var(--neutral-600)',
              marginBottom: 'var(--spacing-lg)',
            }}
          >
            Your participation in the Yajna has been successfully registered.
            <br />
            Thank you for your devotion. 🙏
          </p>

          {/* Decorative divider */}
          <div
            style={{
              width: '4rem',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, var(--saffron-500), transparent)',
              margin: '0 auto var(--spacing-lg)',
            }}
          />

          {/* Details */}
          <div
            style={{
              padding: 'var(--spacing-lg)',
              background: 'var(--cream-100)',
              borderRadius: '1rem',
              textAlign: 'left',
              marginBottom: 'var(--spacing-lg)',
            }}
          >
            <div style={{ marginBottom: 'var(--spacing-sm)' }}>
              <span
                style={{
                  fontSize: 'clamp(0.875rem, 0.8rem + 0.35vw, 1rem)',
                  color: 'var(--neutral-500)',
                }}
              >
                Registered Name:
              </span>
              <div
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  fontWeight: '600',
                  color: 'var(--neutral-700)',
                }}
              >
                {registrationData.fullName}
              </div>
            </div>

            <div style={{ marginBottom: 'var(--spacing-sm)' }}>
              <span
                style={{
                  fontSize: 'clamp(0.875rem, 0.8rem + 0.35vw, 1rem)',
                  color: 'var(--neutral-500)',
                }}
              >
                Email:
              </span>
              <div
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  fontWeight: '500',
                  color: 'var(--neutral-700)',
                }}
              >
                {registrationData.email}
              </div>
            </div>

            <div>
              <span
                style={{
                  fontSize: 'clamp(0.875rem, 0.8rem + 0.35vw, 1rem)',
                  color: 'var(--neutral-500)',
                }}
              >
                Participation Mode:
              </span>
              <div
                style={{
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  fontWeight: '500',
                  color: 'var(--neutral-700)',
                  textTransform: 'capitalize',
                }}
              >
                {registrationData.participationMode.replace('-', ' ')}
              </div>
            </div>
          </div>

          {/* WhatsApp Group Section */}
          <div
            style={{
              padding: 'var(--spacing-lg)',
              background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
              borderRadius: '1rem',
              marginBottom: 'var(--spacing-lg)',
            }}
          >
            <div
              style={{
                fontSize: '2.5rem',
                marginBottom: 'var(--spacing-sm)',
              }}
            >
              💬
            </div>
            <h3
              style={{
                fontSize: 'clamp(1.125rem, 1rem + 0.625vw, 1.375rem)',
                fontWeight: '600',
                color: 'white',
                marginBottom: 'var(--spacing-sm)',
              }}
            >
              Join WhatsApp Group
            </h3>
            <p
              style={{
                fontSize: 'clamp(0.875rem, 0.8rem + 0.35vw, 1rem)',
                color: 'rgba(255, 255, 255, 0.95)',
                marginBottom: 'var(--spacing-md)',
                lineHeight: '1.75',
              }}
            >
              Join the <strong>{groupName}</strong> WhatsApp group to receive updates, schedules, and stay connected with other devotees.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'var(--spacing-md) var(--spacing-lg)',
                background: 'white',
                color: '#128C7E',
                fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                fontWeight: '600',
                borderRadius: '0.75rem',
                textDecoration: 'none',
                transition: 'all 400ms cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
              }}
            >
              <span style={{ marginRight: 'var(--spacing-xs)' }}>📱</span>
              Join Group on WhatsApp
            </a>
          </div>

          <p
            style={{
              fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
              lineHeight: '1.75',
              color: 'var(--neutral-600)',
              fontStyle: 'italic',
            }}
          >
            A confirmation email has been sent to your registered email address
            with all the details about the yajna.
          </p>
        </motion.div>

        {/* Action button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <Button size="lg" onClick={onClose} fullWidth>
            Return to Home
          </Button>
        </motion.div>

        {/* Blessing text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          style={{
            marginTop: 'var(--spacing-xl)',
            fontSize: 'clamp(0.875rem, 0.8rem + 0.35vw, 1rem)',
            color: 'var(--neutral-500)',
            fontStyle: 'italic',
          }}
        >
          May the Divine Mother and Lord Shiva bless you with peace and prosperity.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};
