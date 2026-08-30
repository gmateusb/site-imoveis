'use client'

import { useRouter, useSearchParams } from 'next/navigation'

export default function FiltrosImoveisForm({ cidades, tipos }: { cidades: string[]; tipos: string[] }) {
  const router = useRouter()
  const searchParams = useSearchParams()

  function atualizar(campo: string, valor: string) {
    const params = new URLSearchParams(searchParams.toString())
    if (valor) params.set(campo, valor)
    else params.delete(campo)
    router.push(`/imoveis?${params.toString()}`)
  }

  const campoBase =
    'text-sm px-3 py-2.5 rounded-lg outline-none bg-white'
  const estiloBase = { border: '1px solid #e5e0d5', color: '#1a1a1a' }

  return (
    <div className="flex flex-wrap gap-2">
      <input
        type="text"
        placeholder="Buscar por bairro, cidade ou nome"
        defaultValue={searchParams.get('busca') ?? ''}
        onKeyDown={(e) => {
          if (e.key === 'Enter') atualizar('busca', (e.target as HTMLInputElement).value)
        }}
        onBlur={(e) => atualizar('busca', e.target.value)}
        className={`${campoBase} flex-1 min-w-[220px]`}
        style={estiloBase}
      />
      <select
        defaultValue={searchParams.get('disponivelPara') ?? ''}
        onChange={(e) => atualizar('disponivelPara', e.target.value)}
        className={campoBase}
        style={estiloBase}
      >
        <option value="">Venda ou aluguel</option>
        <option value="venda">Venda</option>
        <option value="locacao_anual">Locação anual</option>
        <option value="locacao_temporada">Temporada</option>
      </select>
      <select
        defaultValue={searchParams.get('tipo') ?? ''}
        onChange={(e) => atualizar('tipo', e.target.value)}
        className={campoBase}
        style={estiloBase}
      >
        <option value="">Tipo de imóvel</option>
        {tipos.map((t) => (
          <option key={t} value={t}>
            {t}
          </option>
        ))}
      </select>
      <select
        defaultValue={searchParams.get('cidade') ?? ''}
        onChange={(e) => atualizar('cidade', e.target.value)}
        className={campoBase}
        style={estiloBase}
      >
        <option value="">Cidade</option>
        {cidades.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  )
}
