import { supabase } from './supabase'
import type { ImovelComMidia } from './tipos'

const CAMPOS_IMOVEL = `
  id, codigo, nome, tipo, disponivel_para, bairro, cidade, estado,
  dormitorios, suites, banheiros, lavabos, garagens, capacidade_hospedes,
  elevador, piscina, aceita_pet, descricao,
  imoveis_fotos ( id, url, url_thumb, ordem, principal ),
  imoveis_videos ( id, url, tipo, youtube_id, principal )
`

export type FiltrosImoveis = {
  tipo?: string
  cidade?: string
  disponivelPara?: string
  dormitoriosMin?: number
  busca?: string
}

export async function buscarImoveisPublicos(filtros: FiltrosImoveis = {}): Promise<ImovelComMidia[]> {
  let query = supabase.from('imoveis').select(CAMPOS_IMOVEL).order('created_at', { ascending: false })

  if (filtros.tipo) query = query.eq('tipo', filtros.tipo)
  if (filtros.cidade) query = query.eq('cidade', filtros.cidade)
  if (filtros.disponivelPara) query = query.contains('disponivel_para', [filtros.disponivelPara])
  if (filtros.dormitoriosMin) query = query.gte('dormitorios', filtros.dormitoriosMin)
  if (filtros.busca) query = query.or(`nome.ilike.%${filtros.busca}%,bairro.ilike.%${filtros.busca}%,cidade.ilike.%${filtros.busca}%`)

  const { data, error } = await query
  if (error) {
    console.error('Erro ao buscar imóveis:', error.message)
    return []
  }
  return (data as unknown as ImovelComMidia[]) || []
}

export async function buscarImovelPorId(id: string): Promise<ImovelComMidia | null> {
  const { data, error } = await supabase.from('imoveis').select(CAMPOS_IMOVEL).eq('id', id).single()
  if (error || !data) return null
  return data as unknown as ImovelComMidia
}

export async function buscarCidadesDisponiveis(): Promise<string[]> {
  const { data } = await supabase.from('imoveis').select('cidade').not('cidade', 'is', null)
  const cidades = new Set(((data as { cidade: string }[]) || []).map((r) => r.cidade).filter(Boolean))
  return Array.from(cidades).sort()
}

export async function buscarTiposDisponiveis(): Promise<string[]> {
  const { data } = await supabase.from('imoveis').select('tipo').not('tipo', 'is', null)
  const tipos = new Set(((data as { tipo: string }[]) || []).map((r) => r.tipo).filter(Boolean))
  return Array.from(tipos).sort()
}
