// Design tokens for spiritual, calm UX

export const colors = {
  // Base colors
  cream: {
    50: '#FFFEFB',
    100: '#FFF9F0',
    200: '#FFF4E6',
    300: '#FFEFD5',
  },
  
  // Saffron accents
  saffron: {
    100: '#FFE5CC',
    200: '#FFD9B3',
    300: '#FFC999',
    400: '#FFB366',
    500: '#FF9933', // Primary saffron
  },
  
  // Gold highlights
  gold: {
    100: '#FFF7E6',
    200: '#FFE6B3',
    300: '#FFD580',
    400: '#D4AF37', // Temple gold
  },
  
  // Neutral tones
  neutral: {
    50: '#FAFAF9',
    100: '#F5F5F4',
    200: '#E7E5E4',
    300: '#D6D3D1',
    400: '#A8A29E',
    500: '#78716C',
    600: '#57534E',
    700: '#44403C',
    800: '#292524',
  },
  
  // Semantic colors (very soft)
  success: '#D4EDDA',
  error: '#F8D7DA',
  warning: '#FFF3CD',
};

export const spacing = {
  // Generous spacing for calm feel
  xs: '0.5rem',    // 8px
  sm: '1rem',      // 16px
  md: '1.5rem',    // 24px
  lg: '2.5rem',    // 40px
  xl: '4rem',      // 64px
  '2xl': '6rem',   // 96px
  '3xl': '8rem',   // 128px
  '4xl': '10rem',  // 160px
  
  // Section spacing
  section: '8rem',      // 128px
  sectionMobile: '4rem', // 64px
};

export const typography = {
  // Font families
  fontFamily: {
    primary: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    heading: '"Crimson Text", Georgia, serif',
  },
  
  // Font sizes (flexible for translation)
  fontSize: {
    xs: 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
    sm: 'clamp(0.875rem, 0.8rem + 0.35vw, 1rem)',
    base: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
    lg: 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)',
    xl: 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
    '2xl': 'clamp(1.5rem, 1.3rem + 1vw, 2rem)',
    '3xl': 'clamp(1.875rem, 1.6rem + 1.375vw, 2.5rem)',
    '4xl': 'clamp(2.25rem, 1.9rem + 1.75vw, 3rem)',
    '5xl': 'clamp(3rem, 2.5rem + 2.5vw, 4rem)',
  },
  
  // Line height (extra generous for readability)
  lineHeight: {
    relaxed: '1.75',
    loose: '2',
    extraLoose: '2.25',
  },
  
  // Letter spacing
  letterSpacing: {
    wide: '0.025em',
    wider: '0.05em',
  },
};

export const layout = {
  // Content width constraints
  maxWidth: {
    narrow: '40rem',    // 640px - for paragraphs
    medium: '60rem',    // 960px - for forms
    wide: '80rem',      // 1280px - for hero
    full: '100%',
  },
  
  // Border radius (soft corners)
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    full: '9999px',
  },
};

export const animations = {
  // Smooth, calm transitions
  transition: {
    slow: '600ms cubic-bezier(0.4, 0, 0.2, 1)',
    medium: '400ms cubic-bezier(0.4, 0, 0.2, 1)',
    fast: '200ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
  
  // Fade animations
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 },
  },
  
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  },
};

export const shadows = {
  // Very subtle shadows
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.03)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.05)',
};
