import Link from 'next/link'
import { notFound } from 'next/navigation'
import { buscarImovelPorId } from '../../../lib/imoveis'
import { ROTULOS_DISPONIVEL, formatarLocalizacao } from '../../../lib/tipos'
import GaleriaImovel from '../../../components/GaleriaImovel'
import VideoImovel from '../../../components/VideoImovel'
import BotaoWhatsapp from '../../../components/BotaoWhatsapp'
import FormularioContato from '../../../components/FormularioContato'
import Footer from '../../../components/Footer'

export const revalidate = 60

function Caracteristica({ rotulo, valor }: { rotulo: string; valor: string | number | null | undefined }) {
  if (!valor) return null
  return (
    <div className="flex flex-col items-center px-4 py-3 rounded-xl" style={{ backgroundColor: '#f7f4ee' }}>
      <span className="text-lg font-bold" style={{ color: '#1a1a1a' }}>
        {valor}
      </span>
      <span className="text-xs" style={{ color: '#6b6353' }}>
        {rotulo}
      </span>
    </div>
  )
}

export default async function DetalheImovel({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const imovel = await buscarImovelPorId(id)
  if (!imovel) notFound()

  const localizacao = formatarLocalizacao(imovel)
  const videoPrincipal =
    imovel.imoveis_videos.find((v) => v.principal) ?? (imovel.imoveis_videos.length > 0 ? imovel.imoveis_videos[0] : null)

  const mensagemWhatsapp = `Olá! Tenho interesse no imóvel "${imovel.nome}" (${imovel.codigo}).`

  return (
    <>
    <div className="max-w-6xl mx-auto px-5 pt-28 pb-10 sm:pt-32">
      <Link href="/imoveis" className="inline-flex items-center gap-1.5 text-sm font-medium mb-6 hover:opacity-70 transition-opacity" style={{ color: '#6b6353' }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
        Voltar para imóveis
      </Link>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {imovel.disponivel_para.map((d) => (
          <span
            key={d}
            className="text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{ backgroundColor: 'var(--accent)', color: '#ffffff' }}
          >
            {ROTULOS_DISPONIVEL[d]}
          </span>
        ))}
      </div>

      <h1 className="text-2xl sm:text-3xl font-extrabold" style={{ color: '#1a1a1a' }}>
        {imovel.nome}
      </h1>
      {localizacao && (
        <p className="text-base mt-1" style={{ color: '#6b6353' }}>
          {localizacao}
        </p>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 flex flex-col gap-6">
          <GaleriaImovel fotos={imovel.imoveis_fotos} nome={imovel.nome} />
          {videoPrincipal && <VideoImovel video={videoPrincipal} nome={imovel.nome} />}

          <div className="flex flex-wrap gap-3">
            <Caracteristica rotulo="Dormitórios" valor={imovel.dormitorios} />
            <Caracteristica rotulo="Suítes" valor={imovel.suites} />
            <Caracteristica rotulo="Banheiros" valor={imovel.banheiros} />
            <Caracteristica rotulo="Lavabos" valor={imovel.lavabos} />
            <Caracteristica rotulo="Vagas" valor={imovel.garagens} />
            {!!imovel.capacidade_hospedes && <Caracteristica rotulo="Hóspedes" valor={imovel.capacidade_hospedes} />}
          </div>

          {(imovel.elevador || imovel.piscina || imovel.aceita_pet) && (
            <div className="flex flex-wrap gap-2">
              {imovel.piscina && (
                <span className="text-sm px-3 py-1.5 rounded-full" style={{ backgroundColor: '#f7f4ee', color: '#1a1a1a' }}>
                  Piscina
                </span>
              )}
              {imovel.elevador && (
                <span className="text-sm px-3 py-1.5 rounded-full" style={{ backgroundColor: '#f7f4ee', color: '#1a1a1a' }}>
                  Elevador
                </span>
              )}
              {imovel.aceita_pet && (
                <span className="text-sm px-3 py-1.5 rounded-full" style={{ backgroundColor: '#f7f4ee', color: '#1a1a1a' }}>
                  Aceita pet
                </span>
              )}
            </div>
          )}

          {imovel.descricao && (
            <div>
              <h2 className="text-lg font-bold mb-2" style={{ color: '#1a1a1a' }}>
                Sobre o imóvel
              </h2>
              <p className="text-sm whitespace-pre-line" style={{ color: '#3a352a' }}>
                {imovel.descricao}
              </p>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <BotaoWhatsapp mensagem={mensagemWhatsapp} className="w-full" />
          <FormularioContato imovelId={imovel.id} titulo="Tenho interesse" />
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}
