/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {

      screens: {
        'lg': '1024px',
      },

      // Custom Font Families
      fontFamily: {
        'nunito': ['Nunito Sans', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      
      // Custom Colors from Design System
      colors: {
        // Primary Colors
        'pure-white': '#ffffff',
        'pure-black': '#000000',
        
        // Teal Family
        'teal': {
          DEFAULT: '#2b9c8e',
          'alt': '#2a9b8d',
          'alt2': '#2a988a',
          'dark': '#0f3631',
          'light': '#e7f4f3',
          'vibrant-light': '#c3fff8',
        },
        
        // Blue Family  
        'blue': {
          'dark': '#264653',
          'vibrant': '#00b7ff',
          'vibrant-dark': '#0000ff',
        },
        
        // Neutral Colors
        'off-white': '#e9e9e9',
        
        // Vibrant Colors
        'vibrant': {
          'yellow-light': '#ffd700',
          'green': '#008000',
          'purple': '#e38dfd',
          'pink-dark': '#800080',
          'orange': '#ffa500',
        },
      },
      
      // Custom Font Sizes with Line Heights (based on design tokens)
      fontSize: {
        // Heading 1 Variants
        'h1-xl': ['77px', { lineHeight: '78px', fontWeight: '700' }],
        'h1-lg': ['68px', { lineHeight: '78px', fontWeight: '700' }],
        'h1-md': ['36px', { lineHeight: '44px', fontWeight: '700' }],
        
        // Heading 2 Variants
        'h2': ['24px', { lineHeight: '32px', fontWeight: '700' }],
        'h2-italic': ['20px', { lineHeight: '28px', fontWeight: '700', fontStyle: 'italic' }],
        'h2-italic-lg': ['24px', { lineHeight: '32px', fontWeight: '700', fontStyle: 'italic' }],
        
        // Heading 3 Variants
        'h3-nunito': ['20px', { lineHeight: '28px', fontWeight: '400' }],
        'h3-montserrat': ['20px', { lineHeight: '28px', fontWeight: '500' }],
        
        // Body Text Variants
        'body-lg': ['18px', { lineHeight: '26px', fontWeight: '500' }],
        'body-italic': ['16px', { lineHeight: '28px', fontWeight: '400', fontStyle: 'italic' }],
        'body-medium': ['16px', { lineHeight: '22px', fontWeight: '500' }],
        'body-bold': ['16px', { lineHeight: '24px', fontWeight: '700' }],
        'body-montserrat': ['16px', { lineHeight: '28px', fontWeight: '500' }],
        
        // Small Text Variants
        'small-medium': ['14px', { lineHeight: '22px', fontWeight: '500' }],
        'small-italic': ['14px', { lineHeight: '28px', fontWeight: '400', fontStyle: 'italic' }],
        'small': ['14px', { lineHeight: '22px', fontWeight: '400' }],
        'small-lg': ['16px', { lineHeight: '22px', fontWeight: '400' }],
        'small-montserrat': ['14px', { lineHeight: '22px', fontWeight: '400' }],
      },
      
      // Custom Spacing (based on design system tokens)
      spacing: {
        // Extra Small
        'xs-4': '4px',
        
        // Small
        'sm-6': '6px',
        'sm-8': '8px',
        
        // Medium
        'md-10': '10px',
        'md-12': '12px',
        'md-15': '15px',
        'md-16': '16px',
        
        // Large
        'lg-16': '16px',
        'lg-19': '19px',
        'lg-20': '20px',
        'lg-24': '24px',
        'lg-32': '32px',
        
        // Extra Large
        'xl-48': '48px',
        'xl-64': '64px',
        'xl-90': '90px',
        'xl-104': '104px',
        'xl-112': '112px',
        'xl-684': '684px',
      },
      
      // Custom Font Weights
      fontWeight: {
        'regular': '400',
        'medium': '500',
        'bold': '700',
      },
      
      // Custom Line Heights
      lineHeight: {
        '78': '78px',
        '44': '44px',
        '32': '32px',
        '28': '28px',
        '26': '26px',
        '24': '24px',
        '22': '22px',
      },
    },
  },
  plugins: [
    '@tailwindcss/forms',
    '@tailwindcss/typography',
  ],
} 