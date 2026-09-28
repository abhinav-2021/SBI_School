/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        school: {
          primary: {
            DEFAULT: '#142D4E',
            dark: '#0B1C30',
            light: '#1F4270',
          },
          secondary: {
            DEFAULT: '#2563EB',
            dark: '#1D4ED8',
            light: '#60A5FA',
          },
          accent: {
            DEFAULT: '#F4B942',
            dark: '#D99818',
            light: '#FCE7A2',
          },
          bg: '#F8FAFC',
          body: '#334155',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Outfit', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 8px -2px rgba(20, 45, 78, 0.06), 0 1px 4px -1px rgba(20, 45, 78, 0.04)',
        'soft': '0 10px 30px -5px rgba(20, 45, 78, 0.08), 0 4px 12px -2px rgba(20, 45, 78, 0.04)',
        'soft-lg': '0 20px 40px -10px rgba(20, 45, 78, 0.12), 0 8px 16px -4px rgba(20, 45, 78, 0.06)',
      },
    },
  },
  plugins: [],
}
