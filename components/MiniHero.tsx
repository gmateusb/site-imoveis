export default function MiniHero({ titulo, subtitulo }: { titulo: string; subtitulo?: string }) {
  return (
    <div className="p-3 pt-3 sm:p-4 sm:pt-5">
      <div
        className="relative w-full rounded-3xl overflow-hidden flex items-end"
        style={{ height: '42vh', minHeight: 260 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/hero-bombinhas.jpg" alt="Bombinhas" className="absolute inset-0 w-full h-full object-cover" />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(21,19,15,0.15) 0%, rgba(21,19,15,0.75) 100%)' }}
        />
        <div className="relative px-6 pb-8 sm:px-10 sm:pb-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">{titulo}</h1>
          {subtitulo && <p className="text-sm sm:text-base text-white/80 mt-2 max-w-lg">{subtitulo}</p>}
        </div>
      </div>
    </div>
  )
}
