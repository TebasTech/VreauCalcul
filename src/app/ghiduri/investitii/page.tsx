import AppLayout from '@/components/AppLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Investiții cu 100 Euro în România 2026 — vreaucalcul.com',
  description: 'Cum să începi să construiești avere în România cu 100 de euro pe lună — bursă și fonduri de investiții.',
}

export default function InvestitiiPage() {
  return (
    <AppLayout>
      <div className="topbar">
        <div className="topbar-left">
          <h1>Investiții cu 100 Euro pe Lună</h1>
          <p>Cum să începi să construiești avere în România</p>
        </div>
        <div className="topbar-right">
          <span className="badge badge-green">Ghid 2026</span>
        </div>
      </div>

      <div className="page-body">
        <div className="article-container">
          <span className="article-badge badge badge-green">Ghid Financiar</span>
          <h1 className="article-title">Investiții cu 100 Euro: Cum să începi să construiești avere în România</h1>
          <p className="article-meta">Ghid pentru începători • vreaucalcul.com • 2026</p>

          <div className="article-body">
            <p>
              Nu ai nevoie de mii de euro pentru a investi. Mulți români cred că piața de capital este rezervată celor bogați sau celor cu cunoștințe financiare avansate. Realitatea este că, în 2026, există instrumente accesibile oricui, chiar și cu un buget de 100 de euro pe lună. Cheia nu este suma cu care începi, ci constanța cu care investești.
            </p>

            <h2>Puterea investiției regulate</h2>
            <p>
              Conceptul de „dollar-cost averaging" (investiție periodică fixă) este cel mai puternic instrument al investitorului de rând. Investind 100 de euro lunar, cumperi mai multe unități când prețurile sunt mici și mai puține când sunt mari — fără să fie nevoie să „ghicești" piața. Pe termen lung, această strategie bate majoritatea investițiilor active gestionate de profesioniști.
            </p>
            <p>
              La o rentabilitate medie de 7% pe an (media istorică a piețelor globale), 100 de euro investiți lunar timp de 20 de ani se transformă în aproximativ 52.000 de euro. Suma totală investită este de 24.000 de euro — diferența de 28.000 de euro este dobânda compusă care lucrează pentru tine.
            </p>

            <h2>Unde să investești în România</h2>
            <p>
              Bursa de Valori București (BVB) oferă acces la companii românești și la ETF-uri (fonduri tranzacționate la bursă) care urmăresc indici globali. Există brokeri autorizați care permit deschiderea unui cont de investiții online în câteva minute, fără comisioane de administrare lunară.
            </p>
            <p>
              Pentru un începător, un ETF care urmărește un indice global (precum MSCI World sau S&P 500) este cea mai simplă și mai eficientă alegere. Îți oferă diversificare instantanee în sute sau mii de companii, cu un singur produs.
            </p>

            <h2>Fondurile de Investiții vs ETF-uri</h2>
            <p>
              Fondurile de investiții gestionate activ au, de regulă, comisioane mai mari și, statistic, performanțe mai slabe decât piața pe termen lung. ETF-urile pasive au comisioane de 0,1–0,5% pe an și replică fidel performanța unui indice. Pentru un investitor cu 100 de euro/lună, ETF-urile sunt alegerea logică.
            </p>
            <p>
              Indiferent de instrument, cel mai important principiu este să nu vinzi în momente de panică. Volatilitatea pe termen scurt este normală — cel care pierde este cel care vinde când piața scade. Cel care câștigă este cel care rămâne investit și continuă să cumpere.
            </p>

            <h2>Concluzie</h2>
            <p>
              Investiția nu este un lux, ci o necesitate în contextul inflației. Banii ținuți în cont curent își pierd valoarea real an de an. Începe cu 100 de euro, crește suma pe măsură ce venitul crește, și lasă timpul să lucreze pentru tine. Ordinea financiară personală începe cu primul pas — chiar dacă este mic.
            </p>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
