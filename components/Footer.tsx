import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="mt-16" style={{ backgroundColor: 'var(--dark)', color: 'rgba(255,255,255,0.65)' }}>
      <div className="max-w-6xl mx-auto px-5 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-base font-extrabold text-white">
          <span
            className="flex items-center justify-center w-7 h-7 rounded-full text-sm font-black"
            style={{ backgroundColor: 'var(--accent)', color: '#ffffff' }}
          >
            B
          </span>
          Bombinhas Imóveis
        </div>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="/imoveis" className="hover:text-white transition-colors">
            Imóveis
          </Link>
          <Link href="/sobre" className="hover:text-white transition-colors">
            Fale conosco
          </Link>
        </nav>
        <p className="text-xs">© {new Date().getFullYear()} Bombinhas Imóveis. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
