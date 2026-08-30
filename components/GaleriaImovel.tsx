'use client'

import { useState } from 'react'
import type { FotoImovelPublica } from '../lib/tipos'

export default function GaleriaImovel({ fotos, nome }: { fotos: FotoImovelPublica[]; nome: string }) {
  const ordenadas = [...fotos].sort((a, b) => a.ordem - b.ordem)
  const [indice, setIndice] = useState(0)

  if (ordenadas.length === 0) {
    return (
      <div
        className="w-full rounded-2xl flex items-center justify-center"
        style={{ aspectRatio: '4 / 3', backgroundColor: '#f7f4ee', border: '1px solid #e5e0d5' }}
      >
        <p className="text-sm" style={{ color: '#b3ab98' }}>Sem fotos cadastradas.</p>
      </div>
    )
  }

  const atual = ordenadas[indice]

  return (
    <div className="flex flex-col gap-3">
      <div className="w-full rounded-2xl overflow-hidden" style={{ aspectRatio: '4 / 3', backgroundColor: '#f7f4ee' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={atual.url} alt={nome} className="w-full h-full object-cover" />
      </div>
      {ordenadas.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {ordenadas.map((foto, i) => (
            <button
              key={foto.id}
              type="button"
              onClick={() => setIndice(i)}
              className="shrink-0 rounded-lg overflow-hidden transition-opacity"
              style={{
                width: 76,
                height: 58,
                border: i === indice ? '2px solid #1a1a1a' : '1px solid #e5e0d5',
                opacity: i === indice ? 1 : 0.7,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={foto.url_thumb ?? foto.url} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
