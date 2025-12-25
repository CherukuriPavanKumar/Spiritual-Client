'use client';

import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  className = '',
  ...props
}) => {
  return (
    <div style={{ marginBottom: 'var(--spacing-lg)' }}>
      {label && (
        <label
          style={{
            display: 'block',
            marginBottom: 'var(--spacing-xs)',
            fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
            fontWeight: '500',
            color: 'var(--neutral-700)',
            letterSpacing: '0.025em',
          }}
        >
          {label}
        </label>
      )}
      <input
        style={{
          width: '100%',
          padding: '1rem 1.25rem',
          fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
          lineHeight: '1.75',
          color: 'var(--neutral-700)',
          background: 'white',
          border: error ? '2px solid #F8D7DA' : '2px solid var(--cream-300)',
          borderRadius: '0.75rem',
          transition: 'all 400ms cubic-bezier(0.4, 0, 0.2, 1)',
          outline: 'none',
        }}
        onFocus={(e) => {
          e.target.style.borderColor = 'var(--saffron-300)';
          e.target.style.boxShadow = '0 0 0 3px rgba(255, 153, 51, 0.1)';
        }}
        onBlur={(e) => {
          e.target.style.borderColor = error ? '#F8D7DA' : 'var(--cream-300)';
          e.target.style.boxShadow = 'none';
        }}
        className={className}
        {...props}
      />
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
      {helperText && !error && (
        <p
          style={{
            marginTop: 'var(--spacing-xs)',
            fontSize: 'clamp(0.875rem, 0.8rem + 0.35vw, 1rem)',
            color: 'var(--neutral-500)',
          }}
        >
          {helperText}
        </p>
      )}
    </div>
  );
};

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  helperText,
  className = '',
  ...props
}) => {
  return (
    <div style={{ marginBottom: 'var(--spacing-lg)' }}>
      {label && (
        <label
          style={{
            display: 'block',
            marginBottom: 'var(--spacing-xs)',
            fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
            fontWeight: '500',
            color: 'var(--neutral-700)',
            letterSpacing: '0.025em',
          }}
        >
          {label}
        </label>
      )}
      <textarea
        style={{
          width: '100%',
          minHeight: '120px',
          padding: '1rem 1.25rem',
          fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
          lineHeight: '1.75',
          color: 'var(--neutral-700)',
          background: 'white',
          border: error ? '2px solid #F8D7DA' : '2px solid var(--cream-300)',
          borderRadius: '0.75rem',
          transition: 'all 400ms cubic-bezier(0.4, 0, 0.2, 1)',
          outline: 'none',
          resize: 'vertical',
        }}
        onFocus={(e) => {
          e.target.style.borderColor = 'var(--saffron-300)';
          e.target.style.boxShadow = '0 0 0 3px rgba(255, 153, 51, 0.1)';
        }}
        onBlur={(e) => {
          e.target.style.borderColor = error ? '#F8D7DA' : 'var(--cream-300)';
          e.target.style.boxShadow = 'none';
        }}
        className={className}
        {...props}
      />
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
      {helperText && !error && (
        <p
          style={{
            marginTop: 'var(--spacing-xs)',
            fontSize: 'clamp(0.875rem, 0.8rem + 0.35vw, 1rem)',
            color: 'var(--neutral-500)',
          }}
        >
          {helperText}
        </p>
      )}
    </div>
  );
};

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

export const Select: React.FC<SelectProps> = ({
  label,
  error,
  options,
  className = '',
  ...props
}) => {
  return (
    <div style={{ marginBottom: 'var(--spacing-lg)' }}>
      {label && (
        <label
          style={{
            display: 'block',
            marginBottom: 'var(--spacing-xs)',
            fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
            fontWeight: '500',
            color: 'var(--neutral-700)',
            letterSpacing: '0.025em',
          }}
        >
          {label}
        </label>
      )}
      <select
        style={{
          width: '100%',
          padding: '1rem 1.25rem',
          fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
          lineHeight: '1.75',
          color: 'var(--neutral-700)',
          background: 'white',
          border: error ? '2px solid #F8D7DA' : '2px solid var(--cream-300)',
          borderRadius: '0.75rem',
          transition: 'all 400ms cubic-bezier(0.4, 0, 0.2, 1)',
          outline: 'none',
          cursor: 'pointer',
        }}
        onFocus={(e) => {
          e.target.style.borderColor = 'var(--saffron-300)';
          e.target.style.boxShadow = '0 0 0 3px rgba(255, 153, 51, 0.1)';
        }}
        onBlur={(e) => {
          e.target.style.borderColor = error ? '#F8D7DA' : 'var(--cream-300)';
          e.target.style.boxShadow = 'none';
        }}
        className={className}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
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
