'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
  steps: string[];
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  currentStep,
  totalSteps,
  steps,
}) => {
  return (
    <div
      style={{
        marginBottom: 'var(--spacing-2xl)',
        padding: 'var(--spacing-lg) 0',
      }}
    >
      {/* Progress bar */}
      <div
        style={{
          position: 'relative',
          height: '4px',
          background: 'var(--cream-300)',
          borderRadius: '9999px',
          overflow: 'hidden',
          marginBottom: 'var(--spacing-lg)',
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{
            width: `${(currentStep / totalSteps) * 100}%`,
          }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, var(--saffron-500), var(--gold-400))',
            borderRadius: '9999px',
          }}
        />
      </div>

      {/* Step indicators */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;

          return (
            <div
              key={index}
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{
                  scale: isCurrent ? 1 : 0.9,
                  background: isCompleted || isCurrent
                    ? 'linear-gradient(135deg, var(--saffron-500), var(--gold-400))'
                    : 'var(--cream-300)',
                }}
                transition={{ duration: 0.3 }}
                style={{
                  width: isCurrent ? '3rem' : '2.5rem',
                  height: isCurrent ? '3rem' : '2.5rem',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--spacing-sm)',
                  color: isCompleted || isCurrent ? 'white' : 'var(--neutral-500)',
                  fontSize: isCurrent ? '1.125rem' : '1rem',
                  fontWeight: '600',
                  boxShadow: isCurrent ? 'var(--shadow-md)' : 'none',
                }}
              >
                {isCompleted ? '✓' : stepNumber}
              </motion.div>
              <p
                style={{
                  fontSize: 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
                  color: isCurrent ? 'var(--neutral-700)' : 'var(--neutral-500)',
                  fontWeight: isCurrent ? '500' : '400',
                  maxWidth: '8rem',
                  lineHeight: '1.5',
                }}
              >
                {step}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
