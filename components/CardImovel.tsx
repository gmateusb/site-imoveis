import Link from 'next/link'
import type { ImovelComMidia } from '../lib/tipos'
import { fotoCapa, formatarLocalizacao, ROTULOS_DISPONIVEL } from '../lib/tipos'

export default function CardImovel({ imovel }: { imovel: ImovelComMidia }) {
  const capa = fotoCapa(imovel)
  const localizacao = formatarLocalizacao(imovel)

  return (
    <Link
      href={`/imoveis/${imovel.id}`}
      className="group block rounded-2xl overflow-hidden transition-transform hover:-translate-y-0.5"
      style={{ border: '1px solid #e5e0d5', backgroundColor: '#ffffff', boxShadow: '0 2px 10px rgba(0,0,0,0.07)' }}
    >
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: '4 / 3', backgroundColor: '#f7f4ee' }}>
        {capa ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={capa.url_thumb ?? capa.url}
            alt={imovel.nome}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-sm" style={{ color: '#b3ab98' }}>
            Sem foto
          </div>
        )}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {imovel.disponivel_para.map((d) => (
            <span
              key={d}
              className="text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{ backgroundColor: '#ffffff', color: '#1a1a1a' }}
            >
              {ROTULOS_DISPONIVEL[d]}
            </span>
          ))}
        </div>
      </div>

      <div className="p-4">
        <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: '#8a8272' }}>
          {imovel.tipo}
        </p>
        <h3 className="text-base font-bold mb-1 line-clamp-1" style={{ color: '#1a1a1a' }}>
          {imovel.nome}
        </h3>
        {localizacao && (
          <p className="text-sm mb-3" style={{ color: '#6b6353' }}>
            {localizacao}
          </p>
        )}
        <div className="flex items-center gap-3 text-sm" style={{ color: '#6b6353' }}>
          {!!imovel.dormitorios && <span>{imovel.dormitorios} dorm.</span>}
          {!!imovel.banheiros && <span>{imovel.banheiros} banh.</span>}
          {!!imovel.garagens && <span>{imovel.garagens} vaga(s)</span>}
        </div>
      </div>
    </Link>
  )
}
