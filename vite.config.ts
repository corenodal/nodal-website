import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

const ukHtml: Plugin = {
  name: 'uk-html',
  transformIndexHtml: (html) =>
    html
      .replace('<html lang="en">', '<html lang="en-GB">')
      .replace(
        /<title>.*<\/title>/,
        '<title>Nousna | Documentation assistant for mental-health clinicians</title>\n    <meta name="description" content="Nousna is designed to transcribe a session, summarise what was discussed and draft notes, letters and summaries for clinicians to review. An evaluation project with independent practices in Great Britain." />',
      ),
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isUK = loadEnv(mode, process.cwd()).VITE_REGION === 'uk'
  return { plugins: isUK ? [react(), ukHtml] : [react()] }
})
