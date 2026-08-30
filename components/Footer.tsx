export default function Footer() {
  return (
    <footer className="mt-16" style={{ backgroundColor: '#1a1a1a', color: 'rgba(255,255,255,0.75)' }}>
      <div className="max-w-6xl mx-auto px-5 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm">
        <p>© {new Date().getFullYear()} Imóveis. Todos os direitos reservados.</p>
        <a href="/sobre" className="hover:text-white transition-colors">
          Fale conosco
        </a>
      </div>
    </footer>
  )
}
