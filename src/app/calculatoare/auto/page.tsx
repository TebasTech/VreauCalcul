'use client'
import { useState } from 'react'
import AppLayout from '@/components/AppLayout'

export default function AutoPage() {
  const [pret, setPret] = useState('')
  const [km, setKm] = useState('')
  const [consum, setConsum] = useState('')
  const [pretCarb, setPretCarb] = useState('7.5')
  const [asig, setAsig] = useState('')
  const [service, setService] = useState('')
  const [tip, setTip] = useState<'nou' | 'second'>('nou')
  const [result, setResult] = useState<null | Record<string,number>>(null)

  function calculeaza() {
    const p = parseFloat(pret)
    const k = parseFloat(km)
    const c = parseFloat(consum)
    const pc = parseFloat(pretCarb)
    const a = parseFloat(asig) || 0
    const s = parseFloat(service) || 0
    if (!p || !k || !c) return

    const depreciereAn = tip === 'nou' ? p * 0.15 : p * 0.10
    const combustibilAn = (k / 100) * c * pc
    const totalAn = depreciereAn + combustibilAn + a + s
    const costKm = totalAn / k

    setResult({
      pret: p,
      depreciereAn: Math.round(depreciereAn),
      combustibilAn: Math.round(combustibilAn),
      asig: Math.round(a),
      service: Math.round(s),
      totalAn: Math.round(totalAn),
      costKm: parseFloat(costKm.toFixed(2)),
    })
  }

  return (
    <AppLayout>
      <div className="topbar">
        <div className="topbar-left">
          <h1>Dilema Auto: Nou vs. Second-Hand</h1>
          <p>Calculează costul total pe km (TCO)</p>
        </div>
        <div className="topbar-right">
          <span className="badge badge-blue">TCO 2026</span>
        </div>
      </div>

      <div className="page-body">
        <div className="calc-container">
          <div className="calc-title">Cost real pe kilometru</div>
          <p className="calc-desc">Nu te lăsa păcălit de prețul de achiziție. Calculează costul real anual și pe km.</p>

          <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
            <button
              onClick={() => setTip('nou')}
              style={{
                padding: '8px 20px', borderRadius: 7, border: '1px solid',
                background: tip === 'nou' ? 'var(--accent)' : 'transparent',
                color: tip === 'nou' ? '#fff' : 'var(--text2)',
                borderColor: tip === 'nou' ? 'var(--accent)' : 'var(--border)',
                cursor: 'pointer', fontFamily: 'inherit', fontSize: 13, fontWeight: 500,
              }}
            >🚗 Mașină Nouă</button>
            <button
              onClick={() => setTip('second')}
              style={{
                padding: '8px 20px', borderRadius: 7, border: '1px solid',
                background: tip === 'second' ? 'var(--accent)' : 'transparent',
                color: tip === 'second' ? '#fff' : 'var(--text2)',
                borderColor: tip === 'second' ? 'var(--accent)' : 'var(--border)',
                cursor: 'pointer', fontFamily: 'inherit', fontSize: 13, fontWeight: 500,
              }}
            >🔧 Second-Hand</button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <div className="form-group">
              <label className="form-label">Preț achiziție (Lei)</label>
              <input className="form-input" type="number" placeholder="ex: 80000" value={pret} onChange={e => setPret(e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">Km parcurși/an</label>
              <input className="form-input" type="number" placeholder="ex: 15000" value={km} onChange={e => setKm(e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">Consum (l/100km)</label>
              <input className="form-input" type="number" placeholder="ex: 7" value={consum} onChange={e => setConsum(e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">Preț carburant (Lei/l)</label>
              <input className="form-input" type="number" placeholder="7.50" value={pretCarb} onChange={e => setPretCarb(e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">Asigurare/an (Lei)</label>
              <input className="form-input" type="number" placeholder="ex: 1500" value={asig} onChange={e => setAsig(e.target.value)} />
            </div>
            <div className="form-group">
              <label className="form-label">Service/an (Lei)</label>
              <input className="form-input" type="number" placeholder="ex: 1000" value={service} onChange={e => setService(e.target.value)} />
            </div>
          </div>

          <button className="btn-primary" onClick={calculeaza}>Calculează TCO</button>

          {result && (
            <div className="result-box">
              <div className="result-title">Cost total anual ({tip === 'nou' ? 'mașină nouă' : 'second-hand'})</div>
              <div className="result-row">
                <span className="result-key">Depreciere/an ({tip === 'nou' ? '15%' : '10%'})</span>
                <span className="result-val">{result.depreciereAn.toLocaleString('ro-RO')} Lei</span>
              </div>
              <div className="result-row">
                <span className="result-key">Combustibil/an</span>
                <span className="result-val">{result.combustibilAn.toLocaleString('ro-RO')} Lei</span>
              </div>
              <div className="result-row">
                <span className="result-key">Asigurare/an</span>
                <span className="result-val">{result.asig.toLocaleString('ro-RO')} Lei</span>
              </div>
              <div className="result-row">
                <span className="result-key">Service/an</span>
                <span className="result-val">{result.service.toLocaleString('ro-RO')} Lei</span>
              </div>
              <div className="result-row">
                <span className="result-key" style={{ fontWeight: 600 }}>Total anual</span>
                <span className="result-val">{result.totalAn.toLocaleString('ro-RO')} Lei</span>
              </div>
              <div className="result-row">
                <span className="result-key" style={{ fontWeight: 600 }}>✅ Cost per km</span>
                <span className="result-val highlight">{result.costKm.toFixed(2)} Lei/km</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  )
}
