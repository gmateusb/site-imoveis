import Link from 'next/link'

export default function Header() {
  return (
    <>
      <Link
        href="/"
        aria-label="Bombinhas Imóveis"
        className="fixed top-4 left-4 sm:top-5 sm:left-5 z-50 flex items-center justify-center w-9 h-9 rounded-full text-sm font-black transition-transform hover:scale-105"
        style={{ backgroundColor: 'var(--accent)', color: '#ffffff' }}
      >
        B
      </Link>

      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex justify-center">
        <div
          className="flex items-center gap-4 px-4 py-2 rounded-full backdrop-blur-md"
          style={{ backgroundColor: 'rgba(21, 19, 15, 0.55)', border: '1px solid rgba(255,255,255,0.12)' }}
        >
          <nav className="flex items-center gap-4 text-xs font-medium text-white/85">
            <Link href="/imoveis" className="hover:text-white transition-colors">
              Imóveis
            </Link>
            <Link href="/sobre" className="hover:text-white transition-colors">
              Contato
            </Link>
          </nav>
          <Link
            href="/imoveis"
            className="text-xs font-semibold px-3 py-1.5 rounded-full transition-colors hover:brightness-95"
            style={{ backgroundColor: '#ffffff', color: '#15130f' }}
          >
            Ver imóveis
          </Link>
        </div>
      </header>
    </>
  )
}
