import { createClient } from '@supabase/supabase-js'

// Chave ANÔNIMA (pública) — não é secreta, é feita pra ser usada no
// navegador. A leitura só funciona porque o sistema interno liberou, via
// política de RLS, os imóveis com status "Ativo" e "Mostrar no site"
// marcado (veja liberar_leitura_publica_imoveis.sql).
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
