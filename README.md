# Site de Imóveis (público)

Site público da imobiliária, conectado ao mesmo banco Supabase do sistema interno (`Catalogo - Online`). Projeto separado e independente — deploy próprio, sem afetar o sistema interno.

## O que tem

- Página inicial com busca e imóveis em destaque
- Lista/grade de todos os imóveis disponíveis (com filtros por tipo, cidade e disponibilidade)
- Página de detalhes do imóvel (fotos, vídeo principal, características, descrição)
- Botão de WhatsApp + formulário de contato em cada imóvel e na página "Fale conosco"

Só aparecem no site os imóveis com status **Ativo** e com o campo **"Mostrar no site?"** marcado (no cadastro do imóvel, dentro do sistema interno).

## Antes de publicar

1. **Rodar os SQLs pendentes** no Supabase (SQL Editor), se ainda não rodou:
   - `liberar_leitura_publica_imoveis.sql` — libera leitura pública dos imóveis/fotos/vídeos marcados para o site (**obrigatório**, sem isso o site não carrega nenhum imóvel)
   - `criar_tabela_leads_site.sql` — tabela onde caem os contatos do formulário
   - `criar_storage_videos_imovel.sql`, `alterar_tabela_imoveis_videos_youtube.sql`, `alterar_tabela_imoveis_videos_principal.sql` — se ainda não rodou (feature de vídeos do imóvel)

2. **Trocar o número de WhatsApp** em `.env.local`:
   ```
   NEXT_PUBLIC_WHATSAPP_NUMERO=5500000000000
   ```
   Troque pelo número real da imobiliária, com código do país (55) + DDD + número, só dígitos.

## Deploy no Vercel

1. Suba a pasta `site-imoveis` para um repositório Git próprio (não precisa incluir o resto do `Catalogo - Online`).
2. No Vercel, importe esse repositório como novo projeto.
3. Configure as variáveis de ambiente (Settings → Environment Variables):
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_WHATSAPP_NUMERO`

   (os valores estão no `.env.local` local — **não** copie a `SUPABASE_SERVICE_ROLE_KEY` do sistema interno, ela não deve existir nesse projeto)
4. Deploy. O Vercel cuida do build (`next build`) automaticamente.

## Rodar localmente

```bash
npm install
npm run dev
```
