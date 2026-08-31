import Link from 'next/link'
import BarraPesquisaHeader from './BarraPesquisaHeader'

export default function Header() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center gap-3 px-3 w-full sm:w-auto">
      <div
        className="flex items-center gap-1 p-1.5 rounded-2xl backdrop-blur-md w-full sm:w-auto"
        style={{ backgroundColor: 'rgba(21, 19, 15, 0.6)', border: '1px solid rgba(255,255,255,0.12)' }}
      >
        <Link
          href="/"
          aria-label="Bombinhas Imóveis"
          className="flex items-center justify-center w-9 h-9 rounded-xl shrink-0"
          style={{ backgroundColor: '#ffffff' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-icone.png" alt="Bombinhas Imóveis" className="w-5 h-5 object-contain" />
        </Link>

        <nav className="flex items-center gap-0.5 px-1 flex-1 justify-center sm:flex-initial">
          <Link
            href="/imoveis"
            className="px-3 py-2 rounded-xl text-xs font-medium text-white/85 hover:bg-white/10 transition-colors"
          >
            Imóveis
          </Link>
          <Link
            href="/sobre"
            className="px-3 py-2 rounded-xl text-xs font-medium text-white/85 hover:bg-white/10 transition-colors"
          >
            Sobre nós
          </Link>
          <Link
            href="/sobre"
            className="px-3 py-2 rounded-xl text-xs font-medium text-white/85 hover:bg-white/10 transition-colors"
          >
            Contato
          </Link>
        </nav>

        <Link
          href="/imoveis?disponivelPara=locacao_temporada"
          className="px-4 py-2 rounded-xl text-xs font-semibold shrink-0 transition-colors hover:brightness-95"
          style={{ backgroundColor: '#ffffff', color: '#15130f' }}
        >
          Temporada
        </Link>
      </div>

      <BarraPesquisaHeader />
    </header>
  )
}
