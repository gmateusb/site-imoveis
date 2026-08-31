import Link from 'next/link'
import { buscarImoveisPublicos } from '../lib/imoveis'

export const revalidate = 60

export default async function Home() {
  const { imoveis } = await buscarImoveisPublicos()

  return (
    <div className="relative w-full overflow-hidden" style={{ height: '100vh', minHeight: 560 }}>
      <h1 className="sr-only">Bombinhas Imóveis</h1>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/hero-home.jpg" alt="Bombinhas" className="absolute inset-0 w-full h-full object-cover" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(21,19,15,0.05) 0%, rgba(21,19,15,0.0) 40%, rgba(21,19,15,0.1) 65%, rgba(21,19,15,0.8) 100%)',
        }}
      />

      <div className="relative h-full flex flex-col justify-end px-5 pb-10 sm:px-10 sm:pb-14">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="flex flex-wrap gap-8 sm:gap-10">
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-white">{imoveis.length}+</p>
              <p className="text-xs sm:text-sm text-white/70 mt-1">Imóveis disponíveis</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-white">3</p>
              <p className="text-xs sm:text-sm text-white/70 mt-1">Tipos de negociação</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:items-end">
            <div className="flex items-center gap-3">
              <Link
                href="/imoveis"
                className="text-sm font-semibold px-6 py-3.5 rounded-full transition-transform hover:scale-105"
                style={{ backgroundColor: '#ffffff', color: '#15130f' }}
              >
                Ver imóveis
              </Link>
              <Link
                href="/imoveis"
                aria-label="Ver imóveis"
                className="w-11 h-11 rounded-full flex items-center justify-center transition-transform hover:scale-105"
                style={{ backgroundColor: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17 17 7M7 7h10v10" />
                </svg>
              </Link>
            </div>
            <p className="text-xs sm:text-sm text-white/70 max-w-[220px] sm:text-right">
              Compra, aluguel anual e temporada em Bombinhas.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
