import { Suspense } from 'react'
import { buscarImoveisPublicos, buscarCidadesDisponiveis, buscarTiposDisponiveis } from '../../lib/imoveis'
import CardImovel from '../../components/CardImovel'
import FiltrosImoveisForm from '../../components/FiltrosImoveis'

export const revalidate = 60

export default async function ListaImoveis({
  searchParams,
}: {
  searchParams: Promise<{ tipo?: string; cidade?: string; disponivelPara?: string; busca?: string }>
}) {
  const filtros = await searchParams
  const [imoveis, cidades, tipos] = await Promise.all([
    buscarImoveisPublicos(filtros),
    buscarCidadesDisponiveis(),
    buscarTiposDisponiveis(),
  ])

  return (
    <div className="max-w-6xl mx-auto px-5 py-10">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: '#1a1a1a' }}>
        Imóveis disponíveis
      </h1>

      <Suspense fallback={null}>
        <FiltrosImoveisForm cidades={cidades} tipos={tipos} />
      </Suspense>

      <div className="mt-8">
        {imoveis.length === 0 ? (
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
  )
}
