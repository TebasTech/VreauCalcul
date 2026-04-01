import AppLayout from '@/components/AppLayout'

const sarbatori2026 = [
  { data: '1 Ian', nume: 'Anul Nou' },
  { data: '2 Ian', nume: 'A doua zi de Anul Nou' },
  { data: '24 Ian', nume: 'Ziua Unirii Principatelor' },
  { data: '10 Apr', nume: 'Vinerea Mare (ortodoxă)' },
  { data: '12-13 Apr', nume: 'Paștele Ortodox' },
  { data: '1 Mai', nume: 'Ziua Muncii' },
  { data: '1 Iun', nume: 'Ziua Copilului' },
  { data: '8-9 Iun', nume: 'Rusaliile' },
  { data: '15 Aug', nume: 'Adormirea Maicii Domnului' },
  { data: '30 Nov', nume: 'Sfântul Andrei' },
  { data: '1 Dec', nume: 'Ziua Națională a României' },
  { data: '25-26 Dec', nume: 'Crăciunul' },
]

const luniDate = [
  { luna: 'Ianuarie', zl: 21, ore: 168 },
  { luna: 'Februarie', zl: 20, ore: 160 },
  { luna: 'Martie', zl: 21, ore: 168 },
  { luna: 'Aprilie', zl: 22, ore: 176 },
  { luna: 'Mai', zl: 21, ore: 168 },
  { luna: 'Iunie', zl: 21, ore: 168 },
  { luna: 'Iulie', zl: 23, ore: 184 },
  { luna: 'August', zl: 21, ore: 168 },
  { luna: 'Septembrie', zl: 22, ore: 176 },
  { luna: 'Octombrie', zl: 22, ore: 176 },
  { luna: 'Noiembrie', zl: 21, ore: 168 },
  { luna: 'Decembrie', zl: 21, ore: 168 },
]

export default function CalendarPage() {
  return (
    <AppLayout>
      <div className="topbar">
        <div className="topbar-left">
          <h1>Calendar Lucrător & Zile Libere 2026</h1>
          <p>Zile lucrătoare, ore de muncă și sărbători legale</p>
        </div>
        <div className="topbar-right">
          <span className="badge badge-blue">2026</span>
        </div>
      </div>

      <div className="page-body">
        <div className="stats-grid" style={{ marginBottom: 24 }}>
          <div className="stat-card">
            <div className="stat-label">Zile lucrătoare</div>
            <div className="stat-value">253</div>
            <div className="stat-sub">total 2026</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Ore de muncă</div>
            <div className="stat-value">2024</div>
            <div className="stat-sub">total 2026</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Sărbători legale</div>
            <div className="stat-value">15</div>
            <div className="stat-sub">zile libere</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Zile weekend</div>
            <div className="stat-value">104</div>
            <div className="stat-sub">sâmbete + duminici</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 20, maxWidth: 900 }}>
          {/* LUNI */}
          <div>
            <div className="section-header"><span className="section-title">Zile lucrătoare pe luni</span></div>
            <div className="calc-container" style={{ padding: 0, overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                <thead>
                  <tr style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}>
                    <th style={{ padding: '10px 16px', textAlign: 'left', fontWeight: 500, color: 'var(--text3)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Luna</th>
                    <th style={{ padding: '10px 16px', textAlign: 'right', fontWeight: 500, color: 'var(--text3)', fontSize: 11, textTransform: 'uppercase' }}>Zile</th>
                    <th style={{ padding: '10px 16px', textAlign: 'right', fontWeight: 500, color: 'var(--text3)', fontSize: 11, textTransform: 'uppercase' }}>Ore</th>
                  </tr>
                </thead>
                <tbody>
                  {luniDate.map((l, i) => (
                    <tr key={l.luna} style={{ borderBottom: i < luniDate.length - 1 ? '1px solid var(--border-light)' : 'none' }}>
                      <td style={{ padding: '9px 16px', color: 'var(--text)' }}>{l.luna}</td>
                      <td style={{ padding: '9px 16px', textAlign: 'right', fontWeight: 500 }}>{l.zl}</td>
                      <td style={{ padding: '9px 16px', textAlign: 'right', color: 'var(--text2)' }}>{l.ore}h</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* SARBATORI */}
          <div>
            <div className="section-header"><span className="section-title">Sărbători legale 2026</span></div>
            <div className="calc-container" style={{ padding: 0, overflow: 'hidden' }}>
              {sarbatori2026.map((s, i) => (
                <div key={i} style={{
                  display: 'flex', flexDirection: 'column', padding: '10px 16px',
                  borderBottom: i < sarbatori2026.length - 1 ? '1px solid var(--border-light)' : 'none',
                }}>
                  <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--accent)', marginBottom: 2 }}>{s.data}</span>
                  <span style={{ fontSize: 12, color: 'var(--text2)' }}>{s.nume}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
