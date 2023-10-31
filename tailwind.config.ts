import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      fontFamily: {
        poppins: 'var(--font-poppins)'
      }
    }
  },
  safelist: [
    'bg-red-500',
    'bg-yellow-500',
    'bg-green-500',
    'bg-indigo-500',
    'bg-orange-500',
    'bg-cyan-500',
    'bg-pink-500',
    'bg-stone-500',
    'bg-slate-500'
  ],
  plugins: []
}
export default config
