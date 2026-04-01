'use client'
import { useState } from 'react'
import AppLayout from '@/components/AppLayout'

const categorii = [
  { key: 'chirie', label: 'Chirie / Ipotecă' },
  { key: 'utilitati', label: 'Utilități (curent, gaz, apă)' },
  { key: 'mancare', label: 'Mâncare / Supermarket' },
  { key: 'transport', label: 'Transport' },
  { key: 'sanatate', label: 'Sănătate / Farmacie' },
  { key: 'divertisment', label: 'Divertisment / Abonamente' },
  { key: 'educatie', label: 'Educație' },
  { key: 'altele', label: 'Altele' },
]

export default function CheltuieliPage() {
  const [venit, setVenit] = useState('')
  const [vals, setVals] = useState<Record<string, string>>({})

  const total = categorii.reduce((s, c) => s + (parseFloat(vals[c.key] || '0') || 0), 0)
  const sold = (parseFloat(venit) || 0) - total
  const soldColor = sold >= 0 ? 'var(--green)' : 'var(--red)'

  return (
    <AppLayout>
      <div className="topbar">
        <div className="topbar-left">
          <h1>Calculator Cheltuieli Lunare</h1>
          <p>Gestionează-ți bugetul lunar cu precizie</p>
        </div>
        <div className="topbar-right">
          <span className="badge badge-green">Buget 2026</span>
        </div>
      </div>

      <div className="page-body">
        <div className="calc-container" style={{ maxWidth: 720 }}>
          <div className="calc-title">Planificare buget lunar</div>
          <p className="calc-desc">Introdu venitul net și cheltuielile pentru a vedea instantaneu soldul rămas.</p>

          <div className="form-group">
            <label className="form-label">Venit Net Lunar (Lei)</label>
            <input className="form-input" type="number" placeholder="ex: 4500" value={venit} onChange={e => setVenit(e.target.value)} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
            {categorii.map(c => (
              <div key={c.key} className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">{c.label} (Lei)</label>
                <input
                  className="form-input"
                  type="number"
                  placeholder="0"
                  value={vals[c.key] || ''}
                  onChange={e => setVals(prev => ({ ...prev, [c.key]: e.target.value }))}
                />
              </div>
            ))}
          </div>

          <div className="result-box">
            <div className="result-title">Rezumat buget</div>
            <div className="result-row">
              <span className="result-key">Venit net</span>
              <span className="result-val" style={{ color: 'var(--green)' }}>
                {(parseFloat(venit) || 0).toLocaleString('ro-RO')} Lei
              </span>
            </div>
            <div className="result-row">
              <span className="result-key">Total cheltuieli</span>
              <span className="result-val" style={{ color: 'var(--red)' }}>
                - {Math.round(total).toLocaleString('ro-RO')} Lei
              </span>
            </div>
            <div className="result-row">
              <span className="result-key" style={{ fontWeight: 600 }}>{sold >= 0 ? '✅ Sold disponibil' : '⚠️ Deficit'}</span>
              <span className="result-val highlight" style={{ color: soldColor }}>
                {Math.round(sold).toLocaleString('ro-RO')} Lei
              </span>
            </div>
            {total > 0 && (
              <div className="result-row">
                <span className="result-key">Rata de economisire</span>
                <span className="result-val">
                  {parseFloat(venit) > 0 ? Math.round((sold / parseFloat(venit)) * 100) : 0}%
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
