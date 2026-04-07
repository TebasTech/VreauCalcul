import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'vreaucalcul.com — Centrul Tău de Calcul',
  description: 'Calculatoare rapide, precise și mereu actualizate conform legislației din 2026. Salariu, pensie, cheltuieli și mai multe.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
