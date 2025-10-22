import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TokenomicsCard from '@/components/TokenomicsCard'
import { useEffect, useState } from 'react'

export default function Home(){
  const [t, setT] = useState({})
  const [lang, setLang] = useState('en')
  useEffect(()=>{const nav=(typeof navigator!=='undefined'?navigator.language:'en'); setLang(nav && nav.startsWith('id')?'id':'en')},[])
  useEffect(()=>{fetch('/locales/'+lang+'.json').then(r=>r.json()).then(d=>setT(d))},[lang])
  return (
    <div>
      <Head>
        <title>{t.siteTitle || 'Edupepe'}</title>
        <meta name="description" content="Edupepe - meme token with purpose: building schools for children in need." />
      </Head>
      <Header />
      <main className="container py-12">
        <section className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-extrabold mb-4">{t.heroTitle || 'Turning Memes into Education'}</h1>
            <p className="text-lg text-slate-600 mb-6">{t.heroSubtitle || ''}</p>
            <div className="flex gap-3">
              <a href="#join" className="btn-primary">{t.ctaPrimary || 'Join the Movement'}</a>
              <a href="/whitepaper.pdf" className="border px-4 py-2 rounded-md">{t.ctaSecondary || 'Read Whitepaper'}</a>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="card"><h4 className="font-semibold">Impact First</h4><p className="text-sm text-slate-600 mt-2">Building schools, training teachers, and providing learning supplies.</p></div>
              <div className="card"><h4 className="font-semibold">Transparent</h4><p className="text-sm text-slate-600 mt-2">On-chain reporting and regular charity audits.</p></div>
              <div className="card"><h4 className="font-semibold">Community Powered</h4><p className="text-sm text-slate-600 mt-2">Token holders shape our roadmap and philanthropy.</p></div>
            </div>
          </div>
          <div>
            <div className="card">
              <h3 className="text-xl font-semibold">{t.missionTitle || 'Our Mission'}</h3>
              <p className="text-sm text-slate-600 mt-2">{t.missionText || ''}</p>
              <div className="mt-4"><TokenomicsCard /></div>
            </div>
          </div>
        </section>
        <section id="roadmap" className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">{t.roadmapTitle || 'Roadmap Highlights'}</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="card">Q4 2025 — Website & Whitepaper • Token Deployment • Presale (50% charity allocation)</div>
            <div className="card">Q1 2026 — Begin construction of Edupepe Free School (Medan) • Publish charity reports</div>
            <div className="card">Q2 2026 — DEX listing • NGO partnerships</div>
            <div className="card">Q3–Q4 2026 — NFT for Education • Regional expansion</div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
