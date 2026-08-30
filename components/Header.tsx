import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-30" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e5e0d5' }}>
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold" style={{ color: '#1a1a1a' }}>
          Imóveis
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium" style={{ color: '#1a1a1a' }}>
          <Link href="/imoveis" className="hover:opacity-70 transition-opacity">
            Imóveis
          </Link>
          <Link href="/sobre" className="hover:opacity-70 transition-opacity">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  )
}
