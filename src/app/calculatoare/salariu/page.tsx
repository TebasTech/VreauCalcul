'use client'
import { useState } from 'react'
import AppLayout from '@/components/AppLayout'

const MONTHS = ['Ianuarie','Februarie','Martie','Aprilie','Mai','Iunie','Iulie','August','Septembrie','Octombrie','Noiembrie','Decembrie']

const CAS = 0.25
const CASS = 0.10
const IMPOZIT = 0.10
const DEDUCERE_PERSONALA = 460 // lei/lună (2026, salariu <= salariu minim)

export default function SalariuPage() {
  const [brut, setBrut] = useState('')
  const [luna, setLuna] = useState('1')
  const [result, setResult] = useState<null | Record<string,number>>(null)

  function calculeaza() {
    const b = parseFloat(brut)
    if (!b || b <= 0) return
    const cas = Math.round(b * CAS)
    const cass = Math.round(b * CASS)
    const bazaImpozit = Math.max(0, b - cas - cass - DEDUCERE_PERSONALA)
    const impozit = Math.round(bazaImpozit * IMPOZIT)
    const net = Math.round(b - cas - cass - impozit)
    setResult({ brut: b, cas, cass, impozit, net, deducere: DEDUCERE_PERSONALA })
  }

  return (
    <AppLayout>
      <div className="topbar">
        <div className="topbar-left">
          <h1>Calculator Salariu Net / Brut</h1>
          <p>Conform legislației fiscale din 2026</p>
        </div>
        <div className="topbar-right">
          <span className="badge badge-blue">CAS 25% • CASS 10% • Impozit 10%</span>
        </div>
      </div>

      <div className="page-body">
        <div className="calc-container">
          <div className="calc-title">Calculează salariul net 2026</div>
          <p className="calc-desc">
            Introdu salariul brut și luna pentru a obține defalcarea completă: CAS, CASS, impozit pe venit și salariul net final.
          </p>

          <div className="form-group">
            <label className="form-label">Salariu Brut (Lei)</label>
            <input
              className="form-input"
              type="number"
              placeholder="ex: 5000"
              value={brut}
              onChange={e => setBrut(e.target.value)}
              min="0"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Luna</label>
            <select className="form-select" value={luna} onChange={e => setLuna(e.target.value)}>
              {MONTHS.map((m, i) => <option key={i} value={String(i+1)}>{m}</option>)}
            </select>
          </div>

          <button className="btn-primary" onClick={calculeaza}>
            Calculează Detaliat
          </button>

          {result && (
            <div className="result-box">
              <div className="result-title">Rezultat detaliat</div>
              <div className="result-row">
                <span className="result-key">Salariu Brut</span>
                <span className="result-val">{result.brut.toLocaleString('ro-RO')} Lei</span>
              </div>
              <div className="result-row">
                <span className="result-key">(-) CAS 25%</span>
                <span className="result-val" style={{ color: 'var(--red)' }}>- {result.cas.toLocaleString('ro-RO')} Lei</span>
              </div>
              <div className="result-row">
                <span className="result-key">(-) CASS 10%</span>
                <span className="result-val" style={{ color: 'var(--red)' }}>- {result.cass.toLocaleString('ro-RO')} Lei</span>
              </div>
              <div className="result-row">
                <span className="result-key">(-) Deducere personală</span>
                <span className="result-val" style={{ color: 'var(--green)' }}>- {result.deducere.toLocaleString('ro-RO')} Lei</span>
              </div>
              <div className="result-row">
                <span className="result-key">(-) Impozit pe venit 10%</span>
                <span className="result-val" style={{ color: 'var(--red)' }}>- {result.impozit.toLocaleString('ro-RO')} Lei</span>
              </div>
              <div className="result-row" style={{ marginTop: 4 }}>
                <span className="result-key" style={{ fontWeight: 600 }}>✅ Salariu Net</span>
                <span className="result-val highlight">{result.net.toLocaleString('ro-RO')} Lei</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  )
}
