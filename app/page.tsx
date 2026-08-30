import Link from 'next/link'
import { buscarImoveisPublicos } from '../lib/imoveis'
import CardImovel from '../components/CardImovel'

export const revalidate = 60

export default async function Home() {
  const { imoveis, erro } = await buscarImoveisPublicos()
  const destaques = imoveis.slice(0, 6)

  return (
    <>
      <section className="px-5 py-16 sm:py-24" style={{ backgroundColor: '#f7f4ee' }}>
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-5">
          <h1 className="text-3xl sm:text-5xl font-bold" style={{ color: '#1a1a1a' }}>
            Encontre o imóvel ideal
          </h1>
          <p className="text-base sm:text-lg" style={{ color: '#6b6353' }}>
            Compra, aluguel anual ou temporada — tudo em um só lugar.
          </p>

          <form action="/imoveis" method="GET" className="w-full max-w-xl flex flex-col sm:flex-row gap-2 mt-2">
            <input
              type="text"
              name="busca"
              placeholder="Buscar por bairro, cidade ou nome do imóvel"
              className="flex-1 text-sm px-4 py-3 rounded-lg outline-none"
              style={{ border: '1px solid #e5e0d5', color: '#1a1a1a', backgroundColor: '#ffffff' }}
            />
            <button
              type="submit"
              className="text-sm font-semibold px-6 py-3 rounded-lg transition-colors hover:brightness-90"
              style={{ backgroundColor: '#1a1a1a', color: '#ffffff' }}
            >
              Buscar
            </button>
          </form>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-14">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold" style={{ color: '#1a1a1a' }}>
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
