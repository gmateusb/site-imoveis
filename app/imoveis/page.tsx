import { Suspense } from 'react'
import { buscarImoveisPublicos, buscarCidadesDisponiveis, buscarTiposDisponiveis } from '../../lib/imoveis'
import CardImovel from '../../components/CardImovel'
import FiltrosImoveisForm from '../../components/FiltrosImoveis'
import MiniHero from '../../components/MiniHero'
import Footer from '../../components/Footer'

export const revalidate = 60

export default async function ListaImoveis({
  searchParams,
}: {
  searchParams: Promise<{ tipo?: string; cidade?: string; disponivelPara?: string; busca?: string }>
}) {
  const filtros = await searchParams
  const [{ imoveis, erro }, cidades, tipos] = await Promise.all([
    buscarImoveisPublicos(filtros),
    buscarCidadesDisponiveis(),
    buscarTiposDisponiveis(),
  ])

  return (
    <>
      <MiniHero titulo="Imóveis disponíveis" subtitulo="Compra, aluguel anual e temporada em Bombinhas." />

      <div className="max-w-6xl mx-auto px-5 py-10">
        <div className="rounded-2xl p-4 sm:p-5 mb-8" style={{ backgroundColor: 'var(--sand)', border: '1px solid #e5e0d5' }}>
          <Suspense fallback={null}>
            <FiltrosImoveisForm cidades={cidades} tipos={tipos} />
          </Suspense>
        </div>

        <div>
        {erro ? (
          <p className="text-sm" style={{ color: '#c14444' }}>
            Erro ao carregar imóveis: {erro}
          </p>
        ) : imoveis.length === 0 ? (
          <p className="text-sm" style={{ color: '#8a8272' }}>
            Nenhum imóvel encontrado com esses filtros.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {imoveis.map((imovel) => (
              <CardImovel key={imovel.id} imovel={imovel} />
            ))}
          </div>
        )}
        </div>
      </div>
      <Footer />
    </>
  )
}
