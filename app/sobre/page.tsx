import BotaoWhatsapp from '../../components/BotaoWhatsapp'
import FormularioContato from '../../components/FormularioContato'

export default function Sobre() {
  return (
    <div className="max-w-4xl mx-auto px-5 py-14">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: '#1a1a1a' }}>
        Fale conosco
      </h1>
      <p className="text-base mb-8" style={{ color: '#6b6353' }}>
        Está procurando um imóvel ou quer anunciar o seu? Fale com a gente pelo WhatsApp
        ou preencha o formulário abaixo que retornamos o quanto antes.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
        <BotaoWhatsapp mensagem="Olá! Gostaria de mais informações." />
        <FormularioContato titulo="Enviar mensagem" />
      </div>
    </div>
  )
}
