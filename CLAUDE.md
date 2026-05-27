# book4me

> Um app de agendamento que qualquer negócio de horário marcado possa usar —
> barbearia, salão, manicure, quadra de futebol, estúdio de tatuagem, consultório.
> A premissa: marcar horário tem que ser tão fácil quanto mandar uma mensagem.

Este projeto está sendo construído ao vivo, do zero, com você (Claude Code) como
o motor de construção. Trabalhe como um engenheiro sênior que já entendeu a visão:
tome decisões coerentes com o produto, prefira sempre o caminho simples que funciona,
e não adicione nada fora do escopo abaixo sem avisar.

## A visão (o "porquê", pra guiar tuas decisões)
- Genérico de propósito: o que muda entre uma barbearia e uma quadra é só o nome do
  serviço e a duração. O resto é o mesmo. Não acople o código a nenhum nicho.
- Dois lados: o DONO do negócio (organiza serviços e horários) e o CLIENTE (marca).
- O coração do produto é confiança: nunca pode haver reserva dupla no mesmo horário.
  Se essa regra falhar, o produto inteiro perde sentido. Trate-a como sagrada.
- Sensação de produto premium: enxuto, rápido, bonito. Nada de poluição visual.

## Stack (definida — não trocar nenhuma peça)
### Frontend
- Next.js (App Router) + TypeScript
- Tailwind CSS
- shadcn/ui para componentes (instalar via `npx shadcn@latest add ...`)
- Axios para TODAS as requisições (nunca `fetch`)
- TanStack Query (React Query): `useQuery` para leitura, `useMutation` para escrita,
  invalidando as queries após cada mutation

### Backend
- NestJS, o mais simples possível, organizado por módulos: services, slots, bookings
- Cada módulo: controller + service (regra de negócio)
- Prisma + PostgreSQL (Postgres já roda local na máquina)
  - DATABASE_URL no .env: postgresql://postgres:postgres@localhost:5432/book4me
- CORS liberado para http://localhost:3000
- Validação de DTOs com class-validator

## Modelo de dados
- Business: id, nome, tipo
- Service: id, businessId, nome, duracaoMin, preco
- Slot: id, businessId, inicio (DateTime), fim (DateTime), disponivel (bool)
- Booking: id, slotId, serviceId, clienteNome, clienteTelefone, status (CONFIRMADO|CANCELADO)

## Escopo e ordem de construção
1. Backend: projeto Nest, Prisma apontando pro Postgres local, schema, primeira
   migration, e um seed (1 business + 2 serviços + alguns horários).
2. Endpoints REST:
   - GET/POST/DELETE /services
   - GET /slots?disponivel=true, POST /slots (gerar janelas de horário)
   - POST /bookings  → REGRA SAGRADA: rejeitar com 409 se o slot já estiver ocupado;
     ao confirmar, marcar o slot como indisponível (idealmente numa transação)
   - GET /bookings, PATCH /bookings/:id/cancel (cancela e libera o slot)
3. Frontend:
   - Tela inicial: seletor "Sou o dono" / "Sou cliente"
   - Painel do dono: CRUD de serviços + gerar horários
   - Fluxo do cliente: escolher serviço → ver horários livres → reservar
   - Tela "minhas reservas": listar e cancelar
4. Acabamento: tema premium (fonte Geist/Inter, radius menor, paleta neutra sóbria,
   espaçamento generoso).

## Fora do escopo (NÃO implementar — é "parte 2/3")
Login/autenticação, pagamento, notificações, recorrência, fuso horário,
multi-tenant real, testes automatizados, deploy.

## Como trabalhar comigo neste vídeo
- Antes de gerar muito código de uma vez, mostre o plano de arquivos/passos e aguarde.
- Trabalhe em incrementos pequenos que dá pra VER funcionando no navegador a cada etapa.
- Quando terminar uma etapa, diga em uma frase o que dá pra testar agora.
- Se algo der errado, explique a causa de forma simples antes de corrigir.

## Design system (seguir em TODOS os componentes)

Objetivo estético: produto premium, sóbrio, confiável. Pensar em apps como Linear,
Vercel, Stripe — não em template colorido. Menos é mais.

### Tema base do shadcn
- Base color: **zinc** (neutra, séria — NÃO usar o slate default)
- Modo: suportar light e dark; começar pelo light
- Em `globals.css`, manter a estrutura de CSS variables do shadcn, ajustando:
  - `--radius: 0.5rem` (bordas contidas — nada de cantos muito arredondados)
  - cor de fundo levemente off-white no light (não branco puro gritante)

### Tipografia
- Fonte: **Geist** (via next/font) para texto e UI. Fallback: Inter.
- Pesos: usar só regular (400) e medium (500). Evitar bold pesado (700) na UI.
- Hierarquia clara: títulos maiores e com peso medium; corpo em 400; labels menores
  e em tom secundário (muted-foreground).

### Cor
- Paleta neutra como base (zinc): fundos, bordas, textos em tons de cinza.
- UMA cor de destaque (accent) só, usada com parcimônia: botão primário, link ativo,
  estado de sucesso. Sugestão: um tom sóbrio (azul-petróleo ou verde-escuro), não neon.
- Estados semânticos: verde discreto p/ sucesso (reserva confirmada),
  vermelho discreto p/ erro (conflito de horário / 409). Sem cores berrantes.

### Espaçamento e layout
- Respiro generoso: padding amplo em cards e seções (o "ar" é o que dá ar premium).
- Largura de conteúdo limitada e centralizada (ex: max-w-2xl/3xl), não esticar full-width.
- Grid/lista com espaçamento consistente entre itens (gap regular).
- Cards com borda sutil (1px, cor de borda neutra) + sombra muito leve ou nenhuma.

### Componentes shadcn a usar
- Button (variantes: default p/ ação primária, outline/ghost p/ secundárias)
- Card (containers de serviço, horário, reserva)
- Input + Label (formulários)
- Select / Calendar (escolha de serviço e horário)
- Dialog (confirmar reserva / cancelamento)
- Toast (sonner) p/ feedback de sucesso e erro
- Badge (status da reserva: confirmado/cancelado; horário livre/ocupado)

### Regras de consistência
- Todo feedback de ação passa por toast (nunca alert() nativo).
- Estados de loading visíveis (skeleton ou spinner) — TanStack Query expõe isLoading.
- Estado vazio tratado ("nenhum serviço cadastrado ainda", "sem horários livres").
- Erro de conflito (409) mostrado de forma clara e amigável, com tom de aviso, não de crash.

### Acabamento final (capítulo de "elevação" do vídeo — deixar por último)
Micro-interações: transições suaves em hover/focus, feedback de clique, animação leve
de entrada nas listas. É o polish que transforma "funciona" em "produto de verdade".
