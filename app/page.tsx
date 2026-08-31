export default function Home() {
  return (
    <div className="relative w-full overflow-hidden" style={{ height: '100vh', minHeight: 560 }}>
      <h1 className="sr-only">Bombinhas Imóveis</h1>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/hero-bombinhas.jpg" alt="Bombinhas" className="absolute inset-0 w-full h-full object-cover" />
    </div>
  )
}
