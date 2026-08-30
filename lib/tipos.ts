export type DisponibilidadeComercial = 'venda' | 'locacao_anual' | 'locacao_temporada'

export const ROTULOS_DISPONIVEL: Record<DisponibilidadeComercial, string> = {
  venda: 'Venda',
  locacao_anual: 'Locação anual',
  locacao_temporada: 'Temporada',
}

export type Imovel = {
  id: string
  codigo: string
  nome: string
  tipo: string
  disponivel_para: DisponibilidadeComercial[]
  bairro: string | null
  cidade: string | null
  estado: string | null
  dormitorios: number | null
  suites: number | null
  banheiros: number | null
  lavabos: number | null
  garagens: number | null
  capacidade_hospedes: number | null
  elevador: boolean | null
  piscina: boolean | null
  aceita_pet: boolean | null
  descricao: string | null
}

export type FotoImovelPublica = {
  id: string
  url: string
  url_thumb: string | null
  ordem: number
  principal: boolean
}

export type VideoImovelPublico = {
  id: string
  url: string | null
  tipo: 'upload' | 'youtube'
  youtube_id: string | null
  principal: boolean
}

export type ImovelComMidia = Imovel & {
  imoveis_fotos: FotoImovelPublica[]
  imoveis_videos: VideoImovelPublico[]
}

export function fotoCapa(imovel: ImovelComMidia): FotoImovelPublica | null {
  if (!imovel.imoveis_fotos || imovel.imoveis_fotos.length === 0) return null
  return (
    imovel.imoveis_fotos.find((f) => f.principal) ??
    [...imovel.imoveis_fotos].sort((a, b) => a.ordem - b.ordem)[0]
  )
}

export function formatarLocalizacao(imovel: Imovel): string | null {
  const partes = [imovel.bairro, imovel.cidade].filter(Boolean)
  return partes.length > 0 ? partes.join(', ') : null
}
