import Link from 'next/link'
export default function Header(){
  return (
    <header className="border-b">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="header-logo">EP</div>
          <div>
            <div className="font-bold text-lg">Edupepe</div>
            <div className="text-xs text-slate-500">Turning Memes into Education</div>
          </div>
        </div>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#tokenomics">Tokenomics</a>
          <a href="#mission">Mission</a>
          <a href="#roadmap">Roadmap</a>
          <a className="btn-primary" href="#join">Join</a>
        </nav>
      </div>
    </header>
  )
}
