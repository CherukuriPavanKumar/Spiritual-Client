'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = `
    font-family: var(--font-primary);
    font-weight: 500;
    border: none;
    cursor: pointer;
    transition: all 400ms cubic-bezier(0.4, 0, 0.2, 1);
    letter-spacing: 0.025em;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    ${fullWidth ? 'width: 100%;' : ''}
    ${disabled ? 'opacity: 0.5; cursor: not-allowed;' : ''}
  `;

  const variants = {
    primary: `
      background: linear-gradient(135deg, var(--saffron-500) 0%, var(--gold-400) 100%);
      color: white;
      box-shadow: var(--shadow-md);
      border-radius: 0.75rem;
      ${!disabled ? 'hover:shadow-lg hover:transform hover:translateY(-2px);' : ''}
    `,
    secondary: `
      background: var(--cream-200);
      color: var(--neutral-700);
      box-shadow: var(--shadow-sm);
      border-radius: 0.75rem;
      ${!disabled ? 'hover:background: var(--cream-300);' : ''}
    `,
    ghost: `
      background: transparent;
      color: var(--neutral-600);
      ${!disabled ? 'hover:color: var(--neutral-700);' : ''}
    `,
  };

  const sizes = {
    sm: 'padding: 0.75rem 1.5rem; font-size: clamp(0.875rem, 0.8rem + 0.35vw, 1rem);',
    md: 'padding: 1rem 2.5rem; font-size: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);',
    lg: 'padding: 1.25rem 3rem; font-size: clamp(1.125rem, 1rem + 0.625vw, 1.25rem);',
  };

  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      style={{
        ...Object.fromEntries(
          (baseStyles + variants[variant] + sizes[size])
            .split(';')
            .filter(Boolean)
            .map(style => {
              const [key, value] = style.split(':').map(s => s.trim());
              return [
                key.replace(/-([a-z])/g, (g) => g[1].toUpperCase()),
                value
              ];
            })
        )
      }}
      className={className}
      disabled={disabled}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {children}
    </motion.button>
  );
};
