'use client';

import React from 'react';

interface RadioGroupProps {
  label?: string;
  name: string;
  options: { value: string; label: string; description?: string }[];
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  name,
  options,
  value,
  onChange,
  error,
}) => {
  return (
    <div style={{ marginBottom: 'var(--spacing-lg)' }}>
      {label && (
        <label
          style={{
            display: 'block',
            marginBottom: 'var(--spacing-md)',
            fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
            fontWeight: '500',
            color: 'var(--neutral-700)',
            letterSpacing: '0.025em',
          }}
        >
          {label}
        </label>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
        {options.map((option) => {
          const isSelected = value === option.value;
          return (
            <label
              key={option.value}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                padding: 'var(--spacing-md)',
                background: isSelected ? 'var(--cream-200)' : 'white',
                border: isSelected
                  ? '2px solid var(--saffron-300)'
                  : '2px solid var(--cream-300)',
                borderRadius: '0.75rem',
                cursor: 'pointer',
                transition: 'all 400ms cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseEnter={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.borderColor = 'var(--saffron-100)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.borderColor = 'var(--cream-300)';
                }
              }}
            >
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={isSelected}
                onChange={(e) => onChange(e.target.value)}
                style={{
                  marginRight: 'var(--spacing-sm)',
                  marginTop: '0.25rem',
                  width: '1.25rem',
                  height: '1.25rem',
                  cursor: 'pointer',
                  accentColor: 'var(--saffron-500)',
                }}
              />
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
                    fontWeight: '500',
                    color: 'var(--neutral-700)',
                    marginBottom: option.description ? 'var(--spacing-xs)' : 0,
                  }}
                >
                  {option.label}
                </div>
                {option.description && (
                  <div
                    style={{
                      fontSize: 'clamp(0.875rem, 0.8rem + 0.35vw, 1rem)',
                      color: 'var(--neutral-500)',
                      lineHeight: '1.75',
                    }}
                  >
                    {option.description}
                  </div>
                )}
              </div>
            </label>
          );
        })}
      </div>
      {error && (
        <p
          style={{
            marginTop: 'var(--spacing-xs)',
            fontSize: 'clamp(0.875rem, 0.8rem + 0.35vw, 1rem)',
            color: '#721C24',
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
};
