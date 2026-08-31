import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 pt-3 sm:px-5 sm:pt-5">
      <div
        className="w-full max-w-6xl flex items-center justify-between px-4 py-3 sm:px-6 rounded-full backdrop-blur-md"
        style={{ backgroundColor: 'rgba(21, 19, 15, 0.55)', border: '1px solid rgba(255,255,255,0.12)' }}
      >
        <Link href="/" className="flex items-center gap-2 text-base font-extrabold text-white tracking-tight">
          <span
            className="flex items-center justify-center w-7 h-7 rounded-full text-sm font-black"
            style={{ backgroundColor: 'var(--accent)', color: '#ffffff' }}
          >
            B
          </span>
          Bombinhas Imóveis
        </Link>
        <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-white/85">
          <Link href="/imoveis" className="hover:text-white transition-colors">
            Imóveis
          </Link>
          <Link href="/sobre" className="hover:text-white transition-colors">
            Contato
          </Link>
        </nav>
        <Link
          href="/imoveis"
          className="text-xs sm:text-sm font-semibold px-4 py-2 rounded-full transition-colors hover:brightness-95"
          style={{ backgroundColor: '#ffffff', color: '#15130f' }}
        >
          Ver imóveis
        </Link>
      </div>
    </header>
  )
}
