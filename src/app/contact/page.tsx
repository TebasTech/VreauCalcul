'use client'
import { useState } from 'react'
import AppLayout from '@/components/AppLayout'

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  return (
    <AppLayout>
      <div className="topbar">
        <div className="topbar-left">
          <h1>Contact</h1>
          <p>Trimite-ne un mesaj</p>
        </div>
      </div>

      <div className="page-body">
        <div className="calc-container" style={{ maxWidth: 560 }}>
          <div className="calc-title">Ia legătura cu noi</div>
          <p className="calc-desc">
            Ai o sugestie, ai găsit o eroare sau vrei să propui un nou calculator? Scrie-ne!
          </p>

          {sent ? (
            <div className="result-box" style={{ textAlign: 'center', padding: 32 }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>✅</div>
              <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 6 }}>Mesaj trimis!</div>
              <p style={{ fontSize: 13, color: 'var(--text2)' }}>Îți vom răspunde în cel mai scurt timp posibil.</p>
            </div>
          ) : (
            <>
              <div className="form-group">
                <label className="form-label">Nume</label>
                <input className="form-input" type="text" placeholder="Numele tău" />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input className="form-input" type="email" placeholder="email@exemplu.com" />
              </div>
              <div className="form-group">
                <label className="form-label">Subiect</label>
                <input className="form-input" type="text" placeholder="ex: Sugestie calculator salariu" />
              </div>
              <div className="form-group">
                <label className="form-label">Mesaj</label>
                <textarea
                  className="form-input"
                  rows={5}
                  placeholder="Scrie mesajul tău..."
                  style={{ resize: 'vertical' }}
                />
              </div>
              <button className="btn-primary" onClick={() => setSent(true)}>
                Trimite mesaj
              </button>
            </>
          )}
        </div>

        <div className="about-grid" style={{ maxWidth: 560, marginTop: 20 }}>
          <div className="about-card">
            <h3>📍 Localizare</h3>
            <p>Arad, România</p>
          </div>
          <div className="about-card">
            <h3>🌐 Web</h3>
            <p>vreaucalcul.com</p>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
