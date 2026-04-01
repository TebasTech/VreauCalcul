import Link from 'next/link'
import AppLayout from '@/components/AppLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'vreaucalcul.com — Centrul Tău de Calcul',
  description: 'Calculatoare rapide, precise și actualizate conform legislației 2026. Salariu net, pensie, cheltuieli, calendar lucrător și mai multe.',
}

const tools = [
  {
    href: '/calculatoare/salariu',
    name: 'Calculator Salariu Net/Brut',
    desc: 'CAS, CASS și impozit pe venit actualizat. Află cât primești în mână.',
    icon: '🧮',
    color: '#eef2ff',
    type: 'Calculator',
    typeBg: '#eef2ff',
    typeColor: '#3730a3',
  },
  {
    href: '/calculatoare/cheltuieli',
    name: 'Calculator Cheltuieli Lunare',
    desc: 'Gestionează-ți bugetul: chirie, utilități, cumpărături — totul într-un loc.',
    icon: '📊',
    color: '#ecfdf5',
    type: 'Calculator',
    typeBg: '#ecfdf5',
    typeColor: '#065f46',
  },
  {
    href: '/calculatoare/pensie',
    name: 'Calculator Pensie',
    desc: 'Cum se împart cei 25% CAS între Pilonul I (stat) și Pilonul II (privat).',
    icon: '🏦',
    color: '#f5f3ff',
    type: 'Calculator',
    typeBg: '#f5f3ff',
    typeColor: '#5b21b6',
  },
  {
    href: '/calculatoare/auto',
    name: 'Dilema Auto: Nou vs Second-Hand',
    desc: 'Costul real pe km — depreciere, mentenanță, taxe naționale.',
    icon: '🚗',
    color: '#fffbeb',
    type: 'Calculator',
    typeBg: '#fffbeb',
    typeColor: '#92400e',
  },
  {
    href: '/calculatoare/balanta',
    name: 'Balanță Financiară',
    desc: 'Venituri vs cheltuieli. Vezi soldul real rămas în timp real.',
    icon: '⚖️',
    color: '#ecfeff',
    type: 'Calculator',
    typeBg: '#ecfeff',
    typeColor: '#0e7490',
  },
  {
    href: '/calculatoare/calendar',
    name: 'Calendar Lucrător 2026',
    desc: 'Zile lucrătoare, ore de muncă și sărbători legale din România.',
    icon: '📅',
    color: '#fef2f2',
    type: 'Calculator',
    typeBg: '#fef2f2',
    typeColor: '#991b1b',
  },
  {
    href: '/ghiduri/e-factura',
    name: 'e-Factura 2026 — Ghid Complet',
    desc: 'Tot ce trebuie să știi dacă ești PFA, freelancer sau profesie liberală.',
    icon: '📄',
    color: '#eef2ff',
    type: 'Ghid',
    typeBg: '#eef2ff',
    typeColor: '#4338ca',
  },
  {
    href: '/ghiduri/recuperare-taxe',
    name: 'Recuperarea Taxelor din Străinătate',
    desc: 'Germania, UK, Austria, Italia — banii tăi uitați în Europa.',
    icon: '🌍',
    color: '#ecfdf5',
    type: 'Ghid',
    typeBg: '#ecfdf5',
    typeColor: '#065f46',
  },
  {
    href: '/ghiduri/investitii',
    name: 'Investiții cu 100 Euro',
    desc: 'Cum să începi să construiești avere în România — bursă și fonduri.',
    icon: '📈',
    color: '#f0fdf4',
    type: 'Ghid',
    typeBg: '#f0fdf4',
    typeColor: '#166534',
  },
]

export default function HomePage() {
  return (
    <AppLayout>
      {/* TOPBAR */}
      <div className="topbar">
        <div className="topbar-left">
          <h1>Centrul Tău de Calcul</h1>
          <p>Calculatoare actualizate conform legislației din 2026</p>
        </div>
        <div className="topbar-right">
          <span className="badge badge-green">● Actualizat 2026</span>
          <span className="badge badge-blue">Legislație RO</span>
        </div>
      </div>

      {/* BODY */}
      <div className="page-body">

        {/* STATS */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-label">Instrumente</div>
            <div className="stat-value">9</div>
            <div className="stat-sub">disponibile gratuit</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Legislație</div>
            <div className="stat-value">2026</div>
            <div className="stat-sub" style={{ color: 'var(--green)' }}>● Actualizat</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">CAS + CASS</div>
            <div className="stat-value">35%</div>
            <div className="stat-sub">contribuții brut</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Impozit venit</div>
            <div className="stat-value">10%</div>
            <div className="stat-sub">angajați România</div>
          </div>
        </div>

        {/* TOOLS */}
        <div className="section-header">
          <span className="section-title">Calculatoare & Ghiduri</span>
          <span style={{ fontSize: 12, color: 'var(--text3)' }}>9 instrumente disponibile</span>
        </div>

        <div className="tools-grid">
          {tools.map(tool => (
            <Link key={tool.href} href={tool.href} className="tool-card">
              <div className="tool-card-icon" style={{ background: tool.color }}>
                {tool.icon}
              </div>
              <div className="tool-card-name">{tool.name}</div>
              <div className="tool-card-desc">{tool.desc}</div>
              <span
                className="tool-card-type"
                style={{ background: tool.typeBg, color: tool.typeColor }}
              >
                {tool.type}
              </span>
            </Link>
          ))}
        </div>

        {/* WHY */}
        <div className="section-header">
          <span className="section-title">De ce vreaucalcul.com?</span>
        </div>
        <div className="about-grid">
          <div className="about-card">
            <h3>⚡ Simplu. Rapid. Precis.</h3>
            <p>Introduci datele, apeși un buton și ai calculul gata. Fără termeni complicați, fără bătăi de cap.</p>
          </div>
          <div className="about-card">
            <h3>📋 Legislație actualizată</h3>
            <p>Spre deosebire de alte site-uri, folosim algoritmi actualizați conform legislației fiscale din 2026.</p>
          </div>
          <div className="about-card">
            <h3>🗺️ Expertiză locală</h3>
            <p>Suntem prezenți în Arad și înțelegem piața muncii din România. Instrumente gândite pentru nevoile tale.</p>
          </div>
          <div className="about-card">
            <h3>🆓 100% gratuit</h3>
            <p>Toate calculatoarele și ghidurile sunt gratuite. Fără cont, fără abonament, fără surprize.</p>
          </div>
        </div>

      </div>
    </AppLayout>
  )
}
