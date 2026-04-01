'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const calculatoare = [
  { href: '/calculatoare/salariu', label: 'Salariu Net/Brut', color: '#1a56db' },
  { href: '/calculatoare/cheltuieli', label: 'Cheltuieli Lunare', color: '#10b981' },
  { href: '/calculatoare/pensie', label: 'Pensie Pilonul 1&2', color: '#8b5cf6' },
  { href: '/calculatoare/auto', label: 'Dilema Auto', color: '#f59e0b' },
  { href: '/calculatoare/balanta', label: 'Balanță Financiară', color: '#06b6d4' },
  { href: '/calculatoare/calendar', label: 'Calendar Lucrător', color: '#ef4444' },
]

const ghiduri = [
  { href: '/ghiduri/e-factura', label: 'e-Factura 2026', color: '#6366f1' },
  { href: '/ghiduri/recuperare-taxe', label: 'Recuperare Taxe', color: '#0ea5e9' },
  { href: '/ghiduri/investitii', label: 'Investiții 100€', color: '#10b981' },
]

export default function Sidebar() {
  const path = usePathname()

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <img src="/logo.png" alt="vreaucalcul.com" onError={(e) => {
          (e.target as HTMLImageElement).style.display = 'none'
        }} />
        <div>
          <div className="sidebar-logo-text">vreaucalcul</div>
          <div className="sidebar-logo-sub">.com • 2026</div>
        </div>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section-label">Principal</div>
        <Link href="/" className={`nav-item ${path === '/' ? 'active' : ''}`}>
          <span className="nav-dot" style={{ background: '#1a56db' }} />
          Painel
        </Link>

        <div className="nav-section-label" style={{ marginTop: 8 }}>Calculatoare</div>
        {calculatoare.map(item => (
          <Link key={item.href} href={item.href} className={`nav-item ${path === item.href ? 'active' : ''}`}>
            <span className="nav-dot" style={{ background: item.color }} />
            {item.label}
          </Link>
        ))}

        <div className="nav-section-label" style={{ marginTop: 8 }}>Ghiduri & Articole</div>
        {ghiduri.map(item => (
          <Link key={item.href} href={item.href} className={`nav-item ${path === item.href ? 'active' : ''}`}>
            <span className="nav-dot" style={{ background: item.color }} />
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="sidebar-footer">
        <Link href="/despre-noi" className={`nav-item ${path === '/despre-noi' ? 'active' : ''}`}>
          <span className="nav-dot" style={{ background: '#9ca3af' }} />
          Despre noi
        </Link>
        <Link href="/contact" className={`nav-item ${path === '/contact' ? 'active' : ''}`}>
          <span className="nav-dot" style={{ background: '#9ca3af' }} />
          Contact
        </Link>
      </div>
    </aside>
  )
}
