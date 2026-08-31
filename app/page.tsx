import { buscarImoveisPublicos } from '../lib/imoveis'

export const revalidate = 60

export default async function Home() {
  const { imoveis } = await buscarImoveisPublicos()

  return (
    <div className="relative w-full overflow-hidden" style={{ height: '100vh', minHeight: 560 }}>
      <h1 className="sr-only">Bombinhas Imóveis</h1>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/hero-bombinhas.jpg" alt="Bombinhas" className="absolute inset-0 w-full h-full object-cover" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(21,19,15,0.05) 0%, rgba(21,19,15,0.0) 40%, rgba(21,19,15,0.1) 65%, rgba(21,19,15,0.8) 100%)',
        }}
      />

      <div className="relative h-full flex flex-col justify-end px-5 pb-10 sm:px-10 sm:pb-14">
        <div>
          <p className="text-3xl sm:text-4xl font-extrabold text-white">{imoveis.length}+</p>
          <p className="text-xs sm:text-sm text-white/70 mt-1">Imóveis disponíveis</p>
        </div>
      </div>
    </div>
  )
}
