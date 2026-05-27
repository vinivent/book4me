# Lâmina

Um repositório de aprendizado.

Aqui dentro tem um app de agendamento de barbearia inteiro: frontend, backend, banco, autenticação, design system. O nome fictício do negócio é **Lâmina**. O nome da pasta raiz é `book4me` por motivo histórico (era como o app se chamava antes de ganhar identidade).

A ideia não é vender o produto. É mostrar **o que dá pra construir em menos de duas horas** usando Claude Code. Eu não escrevi uma única linha de código: descrevi o que queria, revisei o resultado, dei feedback visual e segui pro próximo passo. Tudo que está aqui dentro foi escrito pelo Claude.

## O que tem dentro

O app está funcionando ponta a ponta:

* Landing institucional com hero, seções editoriais e footer.
* Autenticação JWT com dois papéis (dono e cliente), e reserva também como visitante.
* Painel do dono pra cadastrar serviços e gerar horários.
* Fluxo do cliente: escolher serviço, escolher horário, confirmar.
* Regra de banco que impede dois clientes de reservarem o mesmo horário.
* Tela "minhas reservas" com cancelamento.
* Design system editorial em Tailwind v4 com tokens próprios.

## Stack

| Camada | Escolha |
|---|---|
| Linguagem | TypeScript |
| Backend | NestJS 11, Prisma 7, PostgreSQL |
| Auth | `@nestjs/jwt` + `passport-jwt` + `bcryptjs` |
| Frontend | Next.js 16 (App Router), React 19, Tailwind v4 |
| UI | shadcn/ui (preset base-nova) |
| Dados (client) | TanStack Query + Axios |
| Fontes | Instrument Serif (display), Geist Sans (body), Geist Mono (números) |

## Como rodar localmente

Você precisa de:

* Node 20 ou superior
* PostgreSQL rodando localmente
* `npm` (vem com o Node)

### 1. Banco

Crie um banco chamado `book4me`. Por padrão a API se conecta como `postgres / postgres` na porta `5432`. Se sua configuração for diferente, ajuste a `DATABASE_URL` em `apps/api/.env`.

```sql
CREATE DATABASE book4me;
```

### 2. Backend

```bash
cd apps/api
npm install
npx prisma migrate dev
npm run db:seed
npm run start:dev
```

A API sobe em `http://localhost:3333`. O `db:seed` cria a barbearia Lâmina, dois serviços, alguns slots e dois usuários de exemplo:

* **Dono**: `dono@book4me.dev` / `dono123`
* **Cliente**: `cliente@book4me.dev` / `cliente123`

### 3. Frontend

Em outro terminal:

```bash
cd apps/web
npm install
npm run dev
```

A web sobe em `http://localhost:3000`. Abra no navegador, navegue como visitante, logue como cliente pra ver "Minhas reservas", logue como dono pra ver o painel.

## O `CLAUDE.md`

O arquivo `CLAUDE.md` na raiz é o contexto que o Claude Code lê automaticamente. Ele descreve a visão do produto, a stack, regras de design e código. A ideia é não precisar repetir essas coisas a cada conversa.

Se você quer estudar como organizar contexto pra um agente, esse arquivo é exemplo. Tem três tipos de coisa nele:

1. Decisões de produto e estética (o que estamos construindo e por quê).
2. Restrições técnicas (qual stack, quais bibliotecas, padrões a seguir).
3. Preferências de processo (mostrar plano antes de gerar muito código, trabalhar em incrementos visíveis).

Quando o Claude precisa decidir algo no meio do caminho, em vez de chutar ele consulta o `CLAUDE.md`. O resultado é menos retrabalho e mais coerência ao longo da conversa.

## O que esse repositório NÃO é

Pra evitar confusão: isso aqui não é um produto pronto pra produção. Faltam coisas que um app de verdade precisaria, e que ficaram fora de escopo de propósito porque o foco era ensino, não shipping. Exemplos:

* Pagamentos
* Notificações por email ou SMS
* Multi-tenant real (cada barbearia com seu subdomínio, etc)
* Fuso horário e recorrência
* Testes automatizados de qualquer tipo
* Deploy

Se você quiser usar como ponto de partida pra algo real, sem problemas, mas saiba que vai precisar resolver essas pontas.

## Histórico

O repositório foi construído ao vivo, em um vídeo, como demonstração do que dá pra fazer com Claude Code em uma sessão de programação focada. Se você está vindo do vídeo, o histórico do Git acompanha as etapas. Se caiu aqui sem ver o vídeo, sem problema: o código está bem comentado nos pontos que mais valem atenção.
