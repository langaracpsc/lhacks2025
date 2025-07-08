/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Langara Hacks brand colors - EXACT from Figma
        'lh-dark': '#141414',        // Main background RGB(20, 20, 20)
        'lh-primary': '#6E080F',     // Primary red RGB(110, 8, 15) 
        'lh-light': '#DCDCDA',       // Light beige RGB(220, 220, 218)
        'lh-medium': '#2F2E2E',      // Medium gray RGB(47, 46, 46)
        'lh-accent': '#006FFD',      // Blue accent RGB(0, 111, 253)
        'lh-text-light': '#F5F5F5',  // Light gray text
        'lh-text-dark': '#141414',   // Dark text
        
        // shadcn color system
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        // Primary fonts from Figma design
        'spline': ['Spline Sans', 'Inter', 'system-ui', 'sans-serif'], // Primary font (28 uses)
        'spline-semibold': ['Spline Sans', 'Inter', 'system-ui', 'sans-serif'], // Spline Sans SemiBold (7 uses)
        'sf-pro': ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'], // SF Pro with system fallbacks
        'inter': ['Inter', 'system-ui', 'sans-serif'], // Inter for special elements
        'helvetica': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'], // Helvetica Neue for headings
        
        // Default fallback
        'sans': ['Spline Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['7.3rem', { lineHeight: '1.1', fontWeight: '700' }], // 117px from Figma
        'xl-heading': ['5rem', { lineHeight: '1.1', fontWeight: '700' }], // Large headings
        'lg-heading': ['3rem', { lineHeight: '1.2', fontWeight: '600' }], // Medium headings
        'md-heading': ['2rem', { lineHeight: '1.3', fontWeight: '600' }], // Small headings
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'lh-card': '10px 4px 14px 7px rgba(0, 0, 0, 0.25)',
        'lh-hero': '13px 20px 40px 2px rgba(129, 121, 121, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} 