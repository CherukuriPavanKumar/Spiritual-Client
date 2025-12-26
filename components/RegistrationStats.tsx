'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface RegistrationStats {
  totalInPerson: number;
  totalOnline: number;
}

export const RegistrationStats: React.FC = () => {
  const [stats, setStats] = useState<RegistrationStats>({
    totalInPerson: 0,
    totalOnline: 0,
  });
  const [loading, setLoading] = useState(true);

  const TARGET_IN_PERSON = 100;
  const TARGET_ONLINE = 900;
  const TOTAL_TARGET = 1000;

  useEffect(() => {
    fetchStats();
    
    // Subscribe to real-time changes
    const subscription = supabase
      .channel('registrations_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'registrations',
        },
        () => {
          fetchStats();
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const fetchStats = async () => {
    try {
      const { data, error } = await supabase
        .from('registration_stats')
        .select('total_in_person, total_online')
        .single();

      if (error) throw error;

      if (data) {
        setStats({
          totalInPerson: data.total_in_person || 0,
          totalOnline: data.total_online || 0,
        });
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const totalRegistrations = stats.totalInPerson + stats.totalOnline;
  const inPersonPercentage = (stats.totalInPerson / TARGET_IN_PERSON) * 100;
  const onlinePercentage = (stats.totalOnline / TARGET_ONLINE) * 100;
  const overallPercentage = (totalRegistrations / TOTAL_TARGET) * 100;

  if (loading) {
    return (
      <section
        style={{
          padding: 'var(--spacing-section) 0',
          background: 'linear-gradient(135deg, var(--saffron-50) 0%, var(--gold-50) 100%)',
        }}
      >
        <div className="container">
          <div style={{ textAlign: 'center', color: 'var(--neutral-600)' }}>
            లోడ్ చేస్తోంది...
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      style={{
        padding: 'var(--spacing-section) 0',
        background: 'linear-gradient(135deg, var(--saffron-50) 0%, var(--gold-50) 100%)',
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            maxWidth: '60rem',
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
              marginBottom: 'var(--spacing-md)',
              lineHeight: '1.3',
            }}
          >
            నమోదు స్థితి
          </h2>

          <h2
            style={{
              textAlign: 'center',
              fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
              color: 'var(--neutral-600)',
              marginBottom: 'var(--spacing-2xl)',
            }}
          >
            1,000 మంది భక్తుల లక్ష్యం
          </h2>

          {/* Overall progress */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              background: 'white',
              padding: 'var(--spacing-xl)',
              borderRadius: '1rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              marginBottom: 'var(--spacing-2xl)',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontSize: 'clamp(3rem, 2.5rem + 2.5vw, 5rem)',
                fontWeight: '700',
                fontFamily: 'var(--font-heading)',
                background: 'linear-gradient(135deg, var(--saffron-600) 0%, var(--gold-500) 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                lineHeight: '1.2',
                marginBottom: 'var(--spacing-sm)',
              }}
            >
              {totalRegistrations}
            </div>
            <div
              style={{
                fontSize: 'clamp(1.125rem, 1rem + 0.625vw, 1.375rem)',
                color: 'var(--neutral-600)',
                fontWeight: '500',
                marginBottom: 'var(--spacing-lg)',
              }}
            >
              మొత్తం నమోదు చేసుకున్న భక్తులు
            </div>

            {/* Overall progress bar */}
            <div
              style={{
                width: '100%',
                height: '1.5rem',
                background: 'var(--neutral-200)',
                borderRadius: '9999px',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${Math.min(overallPercentage, 100)}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                style={{
                  height: '100%',
                  background: 'linear-gradient(90deg, var(--saffron-500) 0%, var(--gold-400) 100%)',
                  borderRadius: '9999px',
                }}
              />
            </div>
            <div
              style={{
                marginTop: 'var(--spacing-sm)',
                fontSize: 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
                color: 'var(--neutral-500)',
              }}
            >
              {overallPercentage.toFixed(1)}% పూర్తయింది
            </div>
          </motion.div>

          {/* In-person and Online stats */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'var(--spacing-lg)',
            }}
          >
            {/* In-person registrations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                background: 'white',
                padding: 'var(--spacing-xl)',
                borderRadius: '1rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                borderTop: '4px solid var(--saffron-500)',
              }}
            >
              <div
                style={{
                  fontSize: 'clamp(1.125rem, 1rem + 0.625vw, 1.375rem)',
                  fontWeight: '600',
                  color: 'var(--neutral-700)',
                  marginBottom: 'var(--spacing-md)',
                  textAlign: 'center',
                }}
              >
                నేరుగా పాల్గొనే వారు
              </div>

              <div
                style={{
                  fontSize: 'clamp(2.5rem, 2rem + 2vw, 4rem)',
                  fontWeight: '700',
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--saffron-600)',
                  textAlign: 'center',
                  marginBottom: 'var(--spacing-sm)',
                }}
              >
                {stats.totalInPerson}
                <span
                  style={{
                    fontSize: 'clamp(1.25rem, 1.1rem + 0.75vw, 1.75rem)',
                    color: 'var(--neutral-500)',
                    fontWeight: '400',
                  }}
                >
                  {' '}/ {TARGET_IN_PERSON}
                </span>
              </div>

              {/* Progress bar */}
              <div
                style={{
                  width: '100%',
                  height: '0.75rem',
                  background: 'var(--neutral-200)',
                  borderRadius: '9999px',
                  overflow: 'hidden',
                  marginBottom: 'var(--spacing-sm)',
                }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${Math.min(inPersonPercentage, 100)}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
                  style={{
                    height: '100%',
                    background: 'var(--saffron-500)',
                    borderRadius: '9999px',
                  }}
                />
              </div>

              <div
                style={{
                  textAlign: 'center',
                  fontSize: 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
                  color: 'var(--neutral-500)',
                }}
              >
                {inPersonPercentage.toFixed(1)}% పూర్తయింది
              </div>
            </motion.div>

            {/* Online registrations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                background: 'white',
                padding: 'var(--spacing-xl)',
                borderRadius: '1rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                borderTop: '4px solid var(--gold-500)',
              }}
            >
              <div
                style={{
                  fontSize: 'clamp(1.125rem, 1rem + 0.625vw, 1.375rem)',
                  fontWeight: '600',
                  color: 'var(--neutral-700)',
                  marginBottom: 'var(--spacing-md)',
                  textAlign: 'center',
                }}
              >
                ఆన్‌లైన్ పాల్గొనే వారు
              </div>

              <div
                style={{
                  fontSize: 'clamp(2.5rem, 2rem + 2vw, 4rem)',
                  fontWeight: '700',
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--gold-600)',
                  textAlign: 'center',
                  marginBottom: 'var(--spacing-sm)',
                }}
              >
                {stats.totalOnline}
                <span
                  style={{
                    fontSize: 'clamp(1.25rem, 1.1rem + 0.75vw, 1.75rem)',
                    color: 'var(--neutral-500)',
                    fontWeight: '400',
                  }}
                >
                  {' '}/ {TARGET_ONLINE}
                </span>
              </div>

              {/* Progress bar */}
              <div
                style={{
                  width: '100%',
                  height: '0.75rem',
                  background: 'var(--neutral-200)',
                  borderRadius: '9999px',
                  overflow: 'hidden',
                  marginBottom: 'var(--spacing-sm)',
                }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${Math.min(onlinePercentage, 100)}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
                  style={{
                    height: '100%',
                    background: 'var(--gold-500)',
                    borderRadius: '9999px',
                  }}
                />
              </div>

              <div
                style={{
                  textAlign: 'center',
                  fontSize: 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
                  color: 'var(--neutral-500)',
                }}
              >
                {onlinePercentage.toFixed(1)}% పూర్తయింది
              </div>
            </motion.div>
          </div>

          {/* Call to action */}
          {totalRegistrations < TOTAL_TARGET && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{
                marginTop: 'var(--spacing-2xl)',
                padding: 'var(--spacing-lg)',
                background: 'white',
                borderRadius: '1rem',
                textAlign: 'center',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
              }}
            >
              <h2
                style={{
                  textAlign: 'center',
                  fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                  color: 'var(--neutral-600)',
                  lineHeight: '1.75',
                }}
              >
                ఇంకా <strong style={{ color: 'var(--saffron-600)' }}>{TOTAL_TARGET - totalRegistrations}</strong> స్థలాలు అందుబాటులో ఉన్నాయి. 
                ఈ అపూర్వ యజ్ఞంలో పాల్గొని దైవానుగ్రహం పొందండి!
              </h2>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
