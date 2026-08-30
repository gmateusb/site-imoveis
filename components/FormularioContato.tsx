'use client'

import { useState } from 'react'
import { supabase } from '../lib/supabase'

export default function FormularioContato({ imovelId, titulo = 'Fale com a gente' }: { imovelId?: string; titulo?: string }) {
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [enviando, setEnviando] = useState(false)
  const [enviado, setEnviado] = useState(false)
  const [erro, setErro] = useState<string | null>(null)

  async function aoEnviar(e: React.FormEvent) {
    e.preventDefault()
    if (!nome.trim() || !telefone.trim()) return
    setEnviando(true)
    setErro(null)

    const { error } = await supabase.from('leads_site').insert({
      nome: nome.trim(),
      telefone: telefone.trim(),
      email: email.trim() || null,
      mensagem: mensagem.trim() || null,
      imovel_id: imovelId ?? null,
    })

    setEnviando(false)
    if (error) {
      setErro('Não foi possível enviar agora. Tente novamente em instantes.')
      return
    }
    setEnviado(true)
  }

  if (enviado) {
    return (
      <div className="rounded-2xl p-6 text-center" style={{ backgroundColor: '#f7f4ee', border: '1px solid #e5e0d5' }}>
        <p className="text-base font-semibold" style={{ color: '#1a1a1a' }}>
          Recebemos sua mensagem!
        </p>
        <p className="text-sm mt-1" style={{ color: '#6b6353' }}>
          Em breve alguém da nossa equipe vai entrar em contato.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={aoEnviar}
      className="rounded-2xl p-6 flex flex-col gap-3"
      style={{ backgroundColor: '#ffffff', border: '1px solid #e5e0d5', boxShadow: '0 2px 10px rgba(0,0,0,0.06)' }}
    >
      <p className="text-base font-bold" style={{ color: '#1a1a1a' }}>
        {titulo}
      </p>
      <input
        type="text"
        placeholder="Seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
        className="text-sm px-3 py-2.5 rounded-lg outline-none"
        style={{ border: '1px solid #e5e0d5', color: '#1a1a1a' }}
      />
      <input
        type="tel"
        placeholder="WhatsApp / telefone"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
        required
        className="text-sm px-3 py-2.5 rounded-lg outline-none"
        style={{ border: '1px solid #e5e0d5', color: '#1a1a1a' }}
      />
      <input
        type="email"
        placeholder="E-mail (opcional)"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="text-sm px-3 py-2.5 rounded-lg outline-none"
        style={{ border: '1px solid #e5e0d5', color: '#1a1a1a' }}
      />
      <textarea
        placeholder="Mensagem (opcional)"
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
        rows={3}
        className="text-sm px-3 py-2.5 rounded-lg outline-none resize-none"
        style={{ border: '1px solid #e5e0d5', color: '#1a1a1a' }}
      />
      {erro && <p className="text-xs" style={{ color: '#c14444' }}>{erro}</p>}
      <button
        type="submit"
        disabled={enviando}
        className="text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors hover:brightness-90 disabled:opacity-60"
        style={{ backgroundColor: '#1a1a1a', color: '#ffffff' }}
      >
        {enviando ? 'Enviando...' : 'Enviar mensagem'}
      </button>
    </form>
  )
}
