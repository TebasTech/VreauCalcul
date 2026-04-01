# vreaucalcul.com — Next.js

Site reformulado em estilo SaaS moderno (inspirado no Tebas Tech) com sidebar lateral, calculadoras funcionais e guias de texto.

## Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **CSS puro** (sem Tailwind — controle total do design)
- **Vercel** (deploy)

## Estrutura de páginas

```
/                          → Homepage (painel com todos os 9 tools)
/calculatoare/salariu      → Calculator Salariu Net/Brut
/calculatoare/cheltuieli   → Calculator Cheltuieli Lunare
/calculatoare/pensie       → Calculator Pensie Pilonul 1 & 2
/calculatoare/auto         → Dilema Auto: Nou vs Second-Hand
/calculatoare/balanta      → Balanță Financiară
/calculatoare/calendar     → Calendar Lucrător & Zile Libere 2026
/ghiduri/e-factura         → Ghid e-Factura 2026
/ghiduri/recuperare-taxe   → Ghid Recuperare Taxe Străinătate
/ghiduri/investitii        → Ghid Investiții cu 100 Euro
/despre-noi                → Despre noi
/contact                   → Contact
```

## Como rodar localmente

```bash
npm install
npm run dev
# Acesse http://localhost:3000
```

## Como fazer o deploy no Vercel

### Opção 1 — Via GitHub (recomendado)
1. Crie um repositório no GitHub
2. Faça push deste projeto:
   ```bash
   git init
   git add .
   git commit -m "Initial commit — vreaucalcul Next.js"
   git remote add origin https://github.com/SEU_USER/vreaucalcul.git
   git push -u origin main
   ```
3. Acesse [vercel.com](https://vercel.com) → **Add New Project** → importe o repositório
4. Clique em **Deploy** — o Vercel detecta Next.js automaticamente

### Opção 2 — Via Vercel CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

## Como adicionar o logo

1. Coloque o arquivo do seu logo em: `public/logo.png`
2. O logo aparece automaticamente na sidebar

## Como conectar o domínio vreaucalcul.com (Hostinger → Vercel)

1. No Vercel: **Project Settings → Domains → Add Domain** → digite `vreaucalcul.com`
2. O Vercel vai te dar dois registros DNS:
   - Tipo **A** → `76.76.21.21`
   - Tipo **CNAME** → `cname.vercel-dns.com`
3. Na Hostinger: **DNS Zone** → apague os registros A e CNAME antigos → adicione os do Vercel
4. Aguarde propagação (5–30 minutos)

## Para adicionar Google AdSense

Adicione o script no arquivo `src/app/layout.tsx`:
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXX" crossOrigin="anonymous"></script>
```

## Próximos passos sugeridos
- Adicionar páginas long-tail de SEO (`/salariu-net-5000-lei-brut-2026`)
- Integrar Google Analytics (GA4)
- Adicionar sitemap.xml automático (`src/app/sitemap.ts`)
- Criar mais calculadoras conforme demanda
