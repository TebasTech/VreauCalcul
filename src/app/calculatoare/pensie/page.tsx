'use client'
import { useState } from 'react'
import AppLayout from '@/components/AppLayout'

export default function PensiePage() {
  const [brut, setBrut] = useState('')
  const [ani, setAni] = useState('')
  const [result, setResult] = useState<null | Record<string,number>>(null)

  function calculeaza() {
    const b = parseFloat(brut)
    const a = parseFloat(ani)
    if (!b || !a || b <= 0 || a <= 0) return
    const totalCAS = Math.round(b * 0.25)
    const pilon1 = Math.round(totalCAS * 0.8) // 20% din brut → stat
    const pilon2 = Math.round(totalCAS * 0.2) // 5% din brut → privat
    const totalPilon1 = pilon1 * 12 * a
    const totalPilon2 = pilon2 * 12 * a
    setResult({ totalCAS, pilon1, pilon2, totalPilon1, totalPilon2, ani: a })
  }

  return (
    <AppLayout>
      <div className="topbar">
        <div className="topbar-left">
          <h1>Calculator Pensie — Pilonul 1 și 2</h1>
          <p>Repartizarea contribuției CAS de 25% conform legii 2026</p>
        </div>
        <div className="topbar-right">
          <span className="badge badge-blue">Pilon I + Pilon II</span>
        </div>
      </div>

      <div className="page-body">
        <div className="calc-container">
          <div className="calc-title">Estimare contribuții pensie</div>
          <p className="calc-desc">
            Din CAS-ul de 25% din salariul brut, 20% merge la Pilonul I (pensia de stat) și 5% la Pilonul II (fondul tău privat).
          </p>

          <div className="form-group">
            <label className="form-label">Salariu Brut (Lei)</label>
            <input className="form-input" type="number" placeholder="ex: 5000" value={brut} onChange={e => setBrut(e.target.value)} />
          </div>

          <div className="form-group">
            <label className="form-label">Ani de cotizare estimați</label>
            <input className="form-input" type="number" placeholder="ex: 30" value={ani} onChange={e => setAni(e.target.value)} />
          </div>

          <button className="btn-primary" onClick={calculeaza}>Calculează</button>

          {result && (
            <div className="result-box">
              <div className="result-title">Defalcare contribuție pensie</div>
              <div className="result-row">
                <span className="result-key">CAS total (25% din brut)</span>
                <span className="result-val">{result.totalCAS.toLocaleString('ro-RO')} Lei/lună</span>
              </div>
              <div className="result-row">
                <span className="result-key">→ Pilonul I — Stat (20%)</span>
                <span className="result-val" style={{ color: 'var(--accent)' }}>{result.pilon1.toLocaleString('ro-RO')} Lei/lună</span>
              </div>
              <div className="result-row">
                <span className="result-key">→ Pilonul II — Privat (5%)</span>
                <span className="result-val" style={{ color: 'var(--purple)' }}>{result.pilon2.toLocaleString('ro-RO')} Lei/lună</span>
              </div>
              <div className="result-row" style={{ marginTop: 8 }}>
                <span className="result-key">Total Pilon II în {result.ani} ani</span>
                <span className="result-val highlight">{result.totalPilon2.toLocaleString('ro-RO')} Lei</span>
              </div>
              <div className="result-row">
                <span className="result-key">Total Pilon I în {result.ani} ani</span>
                <span className="result-val">{result.totalPilon1.toLocaleString('ro-RO')} Lei</span>
              </div>
              <p style={{ fontSize: 11, color: 'var(--text3)', marginTop: 12 }}>
                * Valorile Pilonului II nu includ dobânzile acumulate în fond. Calculul este simplificat pentru orientare.
              </p>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  )
}
