export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nodal-blue': '#1E3F57', // Horizon Clinical Blue (Structure)
        'nodal-green': '#4EBFA6', // Calm Vitality Green (Action)
        'nodal-violet': '#7B6EF6', // Neutral Violet (AI/Intelligence - Rare)
        'nodal-graphite': '#4A4F55', // Graphite Smoke (Text)
        'nodal-graphite-soft': '#8C9298', // Soft Graphite
        'nodal-grey': '#E6E8EB', // Cloudmist Gray
        'nodal-white': '#F9FAFB', // Moonlight White (Background)
      },
      fontFamily: {
        'sans': ['IBM Plex Sans', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
