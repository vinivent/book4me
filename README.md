# book4me — kit de partida

Este é o ponto de partida do vídeo "construindo um app completo com Claude Code".
Não tem código de aplicação aqui — o app inteiro (frontend, backend e banco) nasce
ao vivo, construído pelo Claude Code. O que este repo te dá é o **contexto** que faz
o Claude já começar alinhado com a ideia.

## O que é o book4me
Um app de agendamento genérico, pra qualquer negócio de horário marcado: barbearia,
salão, manicure, quadra de futebol, consultório. O dono cadastra serviços e horários;
o cliente marca. E o app nunca deixa duas pessoas reservarem o mesmo horário.

## O que tem neste repo
- `CLAUDE.md` — a visão do produto + a stack + as regras. O Claude Code lê isso
  automaticamente e já começa "sabendo" o que vamos construir e por quê.
- Este README com o passo a passo.
- (opcional) `skills/` — habilidades extras que o Claude pode usar.

## Pré-requisitos
- Node 18+
- PostgreSQL rodando local (este projeto usa o banco `book4me`)
- Claude Code instalado

## Antes de começar
1. Crie o banco no seu Postgres:  `CREATE DATABASE book4me;`
2. Confirme que o usuário/senha batem com o `.env` que o Claude vai gerar
   (padrão do vídeo: postgres / postgres).
3. Abra o Claude Code nesta pasta — ele vai ler o `CLAUDE.md` sozinho.

## Como seguir (a ordem dos prompts)
O vídeo lança um prompt por etapa. A ideia é o Claude conduzir a construção; você
orquestra e narra. A sequência:

1. **Apresentar a ideia e o papel dele** (prompt de abertura — veja abaixo)
2. Backend: projeto Nest + Prisma + Postgres + schema + migration + seed
3. Endpoints REST (services, slots, bookings — com a regra de conflito 409)
4. Frontend: Next + shadcn + Axios + TanStack Query
5. Painel do dono → fluxo do cliente → minhas reservas
6. Acabamento premium (tema)

### Prompt de abertura 
> Você vai me ajudar a construir um produto do zero, ao vivo. Leia o CLAUDE.md deste
> repositório — ele tem a visão do produto, a stack e as regras. Em poucas linhas, me
> diga: o que entendeu que vamos construir, por que a regra de não permitir reserva
> dupla é tão importante, e qual o seu plano de construção em etapas. Depois disso,
> vamos começar pela primeira etapa do backend.

Esse primeiro prompt faz o Claude "assumir" a visão em voz alta — ótimo momento de
vídeo, porque ele resume a ideia pra sua audiência melhor do que um slide faria.
EOF
