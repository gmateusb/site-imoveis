import Link from 'next/link'
import { Suspense } from 'react'
import { buscarImoveisPublicos, buscarCidadesDisponiveis, buscarTiposDisponiveis } from '../lib/imoveis'
import { fotoCapa } from '../lib/tipos'
import CardImovel from '../components/CardImovel'
import FiltrosImoveisForm from '../components/FiltrosImoveis'

export const revalidate = 60

export default async function Home() {
  const [{ imoveis, erro }, cidades, tipos] = await Promise.all([
    buscarImoveisPublicos(),
    buscarCidadesDisponiveis(),
    buscarTiposDisponiveis(),
  ])
  const destaques = imoveis.slice(0, 6)
  const destaquePrincipal = imoveis[0]
  const capaDestaque = destaquePrincipal ? fotoCapa(destaquePrincipal) : null

  return (
    <>
      <div className="p-3 pt-3 sm:p-4 sm:pt-5">
        <div className="relative w-full rounded-3xl overflow-hidden" style={{ height: '92vh', minHeight: 560 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/hero-bombinhas.jpg" alt="Bombinhas" className="absolute inset-0 w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(21,19,15,0.35) 0%, rgba(21,19,15,0.05) 30%, rgba(21,19,15,0.15) 55%, rgba(21,19,15,0.85) 100%)',
            }}
          />

          <div className="relative h-full flex flex-col justify-between px-5 pt-24 pb-8 sm:px-10 sm:pt-28 sm:pb-12">
            <h1
              className="text-center font-black leading-none select-none"
              style={{
                fontSize: 'clamp(3.2rem, 13vw, 9.5rem)',
                color: 'rgba(255,255,255,0.92)',
                letterSpacing: '-0.03em',
              }}
            >
              BOMBINHAS
            </h1>

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

          {destaquePrincipal && capaDestaque && (
            <Link
              href={`/imoveis/${destaquePrincipal.id}`}
              className="hidden sm:flex absolute bottom-8 right-8 w-44 rounded-2xl overflow-hidden shadow-2xl flex-col transition-transform hover:scale-105"
              style={{ backgroundColor: 'rgba(21,19,15,0.6)', border: '1px solid rgba(255,255,255,0.2)' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={capaDestaque.url} alt={destaquePrincipal.nome} className="w-full object-cover" style={{ height: 110 }} />
              <div className="px-3 py-2.5">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-white/60">Em destaque</p>
                <p className="text-xs font-bold text-white line-clamp-1 mt-0.5">{destaquePrincipal.nome}</p>
              </div>
            </Link>
          )}
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-5 py-14">
        <div className="rounded-2xl p-4 sm:p-5 mb-12" style={{ backgroundColor: 'var(--sand)', border: '1px solid #e5e0d5' }}>
          <Suspense fallback={null}>
            <FiltrosImoveisForm cidades={cidades} tipos={tipos} />
          </Suspense>
        </div>

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-extrabold" style={{ color: '#1a1a1a' }}>
            Imóveis em destaque
          </h2>
          <Link href="/imoveis" className="text-sm font-semibold hover:underline" style={{ color: '#1a1a1a' }}>
            Ver todos
          </Link>
        </div>

        {erro ? (
          <p className="text-sm" style={{ color: '#c14444' }}>
            Erro ao carregar imóveis: {erro}
          </p>
        ) : destaques.length === 0 ? (
          <p className="text-sm" style={{ color: '#8a8272' }}>
            Nenhum imóvel disponível no momento.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destaques.map((imovel) => (
              <CardImovel key={imovel.id} imovel={imovel} />
            ))}
          </div>
        )}
      </section>
    </>
  )
}
