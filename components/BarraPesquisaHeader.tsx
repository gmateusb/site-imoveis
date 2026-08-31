'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function BarraPesquisaHeader() {
  const router = useRouter()
  const [valor, setValor] = useState('')

  function buscar() {
    const params = new URLSearchParams()
    if (valor) params.set('busca', valor)
    router.push(`/imoveis?${params.toString()}`)
  }

  return (
    <div
      className="hidden sm:flex items-center gap-1.5 p-1.5 rounded-2xl backdrop-blur-md"
      style={{ backgroundColor: 'rgba(21, 19, 15, 0.6)', border: '1px solid rgba(255,255,255,0.12)' }}
    >
      <span className="flex items-center justify-center w-9 h-9 shrink-0">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3" />
        </svg>
      </span>
      <input
        type="text"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') buscar()
        }}
        placeholder="Buscar imóvel..."
        className="bg-transparent text-xs text-white placeholder-white/50 outline-none w-36 pr-3"
      />
    </div>
  )
}
