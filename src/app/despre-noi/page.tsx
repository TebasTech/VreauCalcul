import AppLayout from '@/components/AppLayout'

export default function DespreNoiPage() {
  return (
    <AppLayout>
      <div className="topbar">
        <div className="topbar-left">
          <h1>Despre noi</h1>
          <p>Cine suntem și ce facem</p>
        </div>
      </div>

      <div className="page-body">
        <div className="article-container">
          <h1 className="article-title">Centrul Tău de Calcul</h1>
          <p className="article-meta">vreaucalcul.com • Arad, România • 2026</p>

          <div className="article-body">
            <p>
              vreaucalcul.com este o platformă de calculatoare financiare și ghiduri fiscale, gândită pentru angajații, freelancerii și antreprenorii din România. Misiunea noastră este simplă: să transformăm legislația complexă în instrumente clare și ușor de folosit.
            </p>

            <h2>De ce există vreaucalcul.com?</h2>
            <p>
              Spre deosebire de alte site-uri cu informații învechite, noi actualizăm toți algoritmii conform legislației fiscale în vigoare. În 2026, taxele, contribuțiile și regulile s-au schimbat — calculatoarele noastre reflectă aceste modificări în timp real.
            </p>

            <h2>Filosofia noastră</h2>
            <p>
              Simplu. Rapid. Precis. Introduci datele, apeși un buton și ai calculul gata. Fie că ești angajat și vrei să știi cât primești în mână, freelancer care navighează prin e-Factura, sau român întors din diasporă cu taxe de recuperat — avem un instrument pentru tine.
            </p>

            <h2>Expertiză locală</h2>
            <p>
              Suntem prezenți în Arad și înțelegem piața muncii din România. Toate instrumentele sunt dezvoltate cu focus pe nevoile reale ale românilor — nu copii ale unor site-uri occidentale adaptate forțat.
            </p>
          </div>
        </div>

        <div className="about-grid" style={{ marginTop: 24, maxWidth: 760 }}>
          <div className="about-card">
            <h3>📍 Localizare</h3>
            <p>Arad, România. Înțelegem piața locală și legislația română din interior.</p>
          </div>
          <div className="about-card">
            <h3>⚡ Actualizare continuă</h3>
            <p>Toți algoritmii sunt actualizați conform legislației fiscale 2026 din România.</p>
          </div>
          <div className="about-card">
            <h3>🆓 Gratuit</h3>
            <p>Toate calculatoarele și ghidurile sunt 100% gratuite. Fără abonament, fără surprize.</p>
          </div>
          <div className="about-card">
            <h3>🔒 Privacidade</h3>
            <p>Nu stocăm niciun date personale. Calculele se fac direct în browser-ul tău.</p>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
