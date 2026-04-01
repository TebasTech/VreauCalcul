'use client'
import { useState } from 'react'
import AppLayout from '@/components/AppLayout'

export default function BalantaPage() {
  const [venituri, setVenituri] = useState([{ desc: '', val: '' }])
  const [cheltuieli, setCheltuieli] = useState([{ desc: '', val: '' }])

  const totalV = venituri.reduce((s, r) => s + (parseFloat(r.val) || 0), 0)
  const totalC = cheltuieli.reduce((s, r) => s + (parseFloat(r.val) || 0), 0)
  const sold = totalV - totalC

  return (
    <AppLayout>
      <div className="topbar">
        <div className="topbar-left">
          <h1>Balanță Financiară</h1>
          <p>Venituri vs Cheltuieli — sold în timp real</p>
        </div>
        <div className="topbar-right">
          <span className="badge" style={{ background: sold >= 0 ? 'var(--green-light)' : 'var(--red-light)', color: sold >= 0 ? 'var(--green-text)' : 'var(--red-text)' }}>
            Sold: {Math.round(sold).toLocaleString('ro-RO')} Lei
          </span>
        </div>
      </div>

      <div className="page-body">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, maxWidth: 900 }}>

          {/* VENITURI */}
          <div className="calc-container">
            <div className="calc-title" style={{ color: 'var(--green)', fontSize: 15 }}>+ Venituri</div>
            {venituri.map((row, i) => (
              <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                <input className="form-input" placeholder="Descriere" value={row.desc}
                  onChange={e => { const n = [...venituri]; n[i].desc = e.target.value; setVenituri(n) }} />
                <input className="form-input" type="number" placeholder="Lei" style={{ width: 100 }} value={row.val}
                  onChange={e => { const n = [...venituri]; n[i].val = e.target.value; setVenituri(n) }} />
              </div>
            ))}
            <button className="btn-primary" style={{ background: 'var(--green)', marginTop: 4, fontSize: 12, padding: '7px 14px' }}
              onClick={() => setVenituri([...venituri, { desc: '', val: '' }])}>
              + Adaugă rând
            </button>
            <div style={{ marginTop: 16, padding: '10px 0', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', fontWeight: 600, fontSize: 14 }}>
              <span>Total venituri</span>
              <span style={{ color: 'var(--green)' }}>{Math.round(totalV).toLocaleString('ro-RO')} Lei</span>
            </div>
          </div>

          {/* CHELTUIELI */}
          <div className="calc-container">
            <div className="calc-title" style={{ color: 'var(--red)', fontSize: 15 }}>− Cheltuieli</div>
            {cheltuieli.map((row, i) => (
              <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                <input className="form-input" placeholder="Descriere" value={row.desc}
                  onChange={e => { const n = [...cheltuieli]; n[i].desc = e.target.value; setCheltuieli(n) }} />
                <input className="form-input" type="number" placeholder="Lei" style={{ width: 100 }} value={row.val}
                  onChange={e => { const n = [...cheltuieli]; n[i].val = e.target.value; setCheltuieli(n) }} />
              </div>
            ))}
            <button className="btn-primary" style={{ background: 'var(--red)', marginTop: 4, fontSize: 12, padding: '7px 14px' }}
              onClick={() => setCheltuieli([...cheltuieli, { desc: '', val: '' }])}>
              + Adaugă rând
            </button>
            <div style={{ marginTop: 16, padding: '10px 0', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', fontWeight: 600, fontSize: 14 }}>
              <span>Total cheltuieli</span>
              <span style={{ color: 'var(--red)' }}>{Math.round(totalC).toLocaleString('ro-RO')} Lei</span>
            </div>
          </div>
        </div>

        {/* SOLD */}
        <div className="result-box" style={{ maxWidth: 900, marginTop: 20 }}>
          <div className="result-title">Rezumat balanță</div>
          <div className="result-row">
            <span className="result-key">Total venituri</span>
            <span className="result-val" style={{ color: 'var(--green)' }}>{Math.round(totalV).toLocaleString('ro-RO')} Lei</span>
          </div>
          <div className="result-row">
            <span className="result-key">Total cheltuieli</span>
            <span className="result-val" style={{ color: 'var(--red)' }}>{Math.round(totalC).toLocaleString('ro-RO')} Lei</span>
          </div>
          <div className="result-row">
            <span className="result-key" style={{ fontWeight: 600 }}>{sold >= 0 ? '✅ Sold pozitiv' : '⚠️ Deficit'}</span>
            <span className="result-val highlight" style={{ color: sold >= 0 ? 'var(--green)' : 'var(--red)', fontSize: 18 }}>
              {Math.round(sold).toLocaleString('ro-RO')} Lei
            </span>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
