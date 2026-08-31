import BotaoWhatsapp from '../../components/BotaoWhatsapp'
import FormularioContato from '../../components/FormularioContato'
import MiniHero from '../../components/MiniHero'
import Footer from '../../components/Footer'

export default function Sobre() {
  return (
    <>
      <MiniHero titulo="Fale conosco" subtitulo="Procurando um imóvel ou quer anunciar o seu? A gente te responde rápido." />

      <div className="max-w-4xl mx-auto px-5 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
          <BotaoWhatsapp mensagem="Olá! Gostaria de mais informações." />
          <FormularioContato titulo="Enviar mensagem" />
        </div>
      </div>
      <Footer />
    </>
  )
}
