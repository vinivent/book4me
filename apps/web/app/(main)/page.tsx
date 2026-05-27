'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useAuth } from '@/lib/auth';
import { formatMoney } from '@/lib/format';
import { useActiveBusiness, useServices } from '@/lib/queries';

const steps = [
  {
    title: 'Escolha o serviço',
    body: 'Selecione o que você precisa: corte, barba ou combo.',
  },
  {
    title: 'Escolha o horário',
    body: 'Só os horários realmente livres aparecem pra você.',
  },
  {
    title: 'Confirme em segundos',
    body: 'Sem ligação, sem espera. Reserva garantida na hora.',
  },
];

const styles = [
  {
    title: 'Corte clássico',
    src: '/assets/chair.png',
    desc: 'Atendimento na cadeira de sempre.',
  },
  {
    title: 'Barba feita',
    src: '/assets/chair-hand.png',
    desc: 'Toalha quente, navalha, mão firme.',
  },
  {
    title: 'Hora marcada',
    src: '/assets/clock.png',
    desc: 'Você chega, a cadeira está pronta.',
  },
];

export default function HomePage() {
  const { user } = useAuth();
  const { business, isLoading: bizLoading } = useActiveBusiness();
  const { data: services, isLoading: servicesLoading } = useServices(
    business?.id,
  );

  return (
    <main className="flex flex-col">
      <section className="relative -mt-14 overflow-hidden bg-zinc-950 text-zinc-50 min-h-[88vh] flex flex-col">
        <Image
          src="/assets/hero-shaving.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/65 to-zinc-950/15"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/40"
          aria-hidden
        />

        <div className="relative flex-1 mx-auto w-full max-w-6xl px-6 pt-28 pb-12 lg:pt-40 flex flex-col justify-end gap-y-12">
          <div className="flex flex-col gap-7 max-w-2xl">
            <span
              className="animate-fade-up inline-flex items-center gap-2 self-start text-[11px] uppercase tracking-[0.22em] text-zinc-300 px-3 py-1 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-sm"
              style={{ '--d': '0ms' } as React.CSSProperties}
            >
              <span
                className="size-1.5 rounded-full bg-[oklch(0.7_0.11_200)]"
                aria-hidden
              />
              {bizLoading ? '...' : (business?.tipo ?? 'Barbearia')}
              <span className="text-zinc-500">·</span>
              <span className="text-zinc-400">desde 2019</span>
            </span>

            <h1
              className="animate-fade-up font-display text-6xl sm:text-7xl lg:text-[7rem] leading-[0.95] tracking-tight text-balance text-zinc-50"
              style={{ '--d': '80ms' } as React.CSSProperties}
            >
              {bizLoading ? (
                <Skeleton className="h-20 w-3/4 bg-white/10" />
              ) : (
                <>
                  <span className="block">
                    {(business?.nome ?? 'Lâmina').split(' ')[0]}
                  </span>
                  <span className="block font-display-italic text-[oklch(0.7_0.11_200)]">
                    {(business?.nome ?? '').split(' ').slice(1).join(' ') ||
                      'sem espera'}
                  </span>
                </>
              )}
            </h1>

            <p
              className="animate-fade-up text-lg text-zinc-300 max-w-md leading-relaxed"
              style={{ '--d': '160ms' } as React.CSSProperties}
            >
              Marque seu horário em segundos. Escolha o serviço, escolha o
              horário e pronto. Sem ligação, sem espera.
            </p>

            <div
              className="animate-fade-up flex flex-wrap items-center gap-3"
              style={{ '--d': '240ms' } as React.CSSProperties}
            >
              <Link
                href="/agendar"
                className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-md bg-zinc-50 text-zinc-950 text-sm font-medium hover:bg-zinc-200 transition-colors"
              >
                Agendar horário
                <ArrowRight className="size-4" />
              </Link>
              {!user && (
                <Link
                  href="/cadastro"
                  className="inline-flex items-center justify-center h-11 px-5 rounded-md text-sm font-medium text-zinc-100 hover:bg-white/10 transition-colors"
                >
                  Criar conta
                </Link>
              )}
            </div>
          </div>

          <div
            className="animate-fade-up grid grid-cols-1 sm:grid-cols-3 gap-px rounded-xl overflow-hidden border border-white/10 bg-white/10 backdrop-blur-md"
            style={{ '--d': '360ms' } as React.CSSProperties}
          >
            <div className="bg-zinc-950/55 px-6 py-5 flex flex-col gap-1">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-400">
                Endereço
              </span>
              <span className="text-sm text-zinc-100">
                Rua das Acácias, 38
              </span>
              <span className="text-xs text-zinc-400">
                Centro · São Paulo
              </span>
            </div>
            <div className="bg-zinc-950/55 px-6 py-5 flex flex-col gap-1">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-400">
                Contato
              </span>
              <span className="font-mono text-sm tabular-nums text-zinc-100">
                (11) 91234-5678
              </span>
              <span className="text-xs text-zinc-400">
                ola@lamina.barbearia
              </span>
            </div>
            <div className="bg-zinc-950/55 px-6 py-5 flex flex-col gap-1">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-400">
                Horário
              </span>
              <span className="text-sm text-zinc-100">
                Seg a Sáb · 9h às 19h
              </span>
              <span className="text-xs text-zinc-400">Domingo fechado</span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-zinc-950 text-zinc-100 bg-grain bg-grain-dark overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 [background:radial-gradient(50%_50%_at_20%_0%,oklch(0.62_0.11_200/0.08),transparent_70%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-6 py-24 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-8 max-w-md">
            <span className="font-display-italic text-2xl text-zinc-300 leading-none">
              O ofício
            </span>

            <p className="font-display text-3xl sm:text-4xl leading-[1.15] tracking-tight text-zinc-50 text-balance">
              Barbearias que operam como{' '}
              <span className="font-display-italic text-[oklch(0.7_0.11_200)]">
                casas de ofício.
              </span>{' '}
              Aqui o tempo não se perde.
            </p>

            <ul className="flex flex-col">
              {steps.map((step, i) => (
                <li
                  key={step.title}
                  className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 py-4 border-t border-white/8"
                >
                  <span className="font-mono text-xs tabular-nums text-[oklch(0.7_0.11_200)] mt-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-50">
                    {step.title}
                  </span>
                  <span className="col-start-2 text-sm text-zinc-400 leading-relaxed">
                    {step.body}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 grid-rows-2 gap-2 lg:gap-3 aspect-square lg:aspect-[5/6]">
            <div className="row-span-2 relative overflow-hidden rounded-lg bg-zinc-900">
              <Image
                src="/assets/frente-barbearia2.png"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 280px"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg bg-zinc-900">
              <Image
                src="/assets/notebook-pen.png"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 280px"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg bg-[oklch(0.42_0.09_200)] bg-grain bg-grain-dark">
              <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-1">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-50/60">
                  Em uma frase
                </span>
                <p className="font-display text-lg leading-[1.15] tracking-tight text-zinc-50 text-balance">
                  Atendimento total da sua hora.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 flex flex-col gap-10">
          <div className="flex items-end justify-between gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Catálogo
              </span>
              <h2 className="font-display text-4xl sm:text-5xl tracking-tight">
                Nossos serviços
              </h2>
            </div>
            <span className="hidden sm:inline-flex font-mono text-xs text-muted-foreground tabular-nums shrink-0">
              {String(services?.length ?? 0).padStart(2, '0')} disponíveis
            </span>
          </div>

          {servicesLoading ? (
            <div className="grid gap-2 sm:grid-cols-2">
              <Skeleton className="h-28" />
              <Skeleton className="h-28" />
            </div>
          ) : services && services.length > 0 ? (
            <div className="grid gap-2 sm:grid-cols-2">
              {services.map((s) => (
                <Card
                  key={s.id}
                  className="group transition-colors hover:border-foreground/20"
                >
                  <CardHeader className="pb-2">
                    <CardTitle className="font-display text-2xl tracking-tight">
                      {s.nome}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex items-baseline justify-between border-t border-border/60 pt-3 mt-1">
                    <span className="text-sm text-muted-foreground">
                      {s.duracaoMin} min
                    </span>
                    <span className="font-mono text-base font-medium tabular-nums">
                      {formatMoney(s.preco)}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">
              Nenhum serviço disponível no momento.
            </p>
          )}
        </div>
      </section>

      <section className="border-t border-border bg-[oklch(0.96_0.008_85)]">
        <div className="mx-auto max-w-6xl px-6 py-24 flex flex-col gap-14">
          <div className="flex flex-col items-center text-center gap-4 max-w-2xl mx-auto">
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Estilos da casa
            </span>
            <h2 className="font-display text-4xl sm:text-5xl tracking-tight leading-[1.05] text-balance">
              A precisão que seu corte{' '}
              <span className="font-display-italic">merece.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-xl">
              Seja o corte clássico, a barba feita ou a hora marcada certinha,
              Lâmina é o silêncio necessário entre o cliente e a cadeira.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {styles.map((s) => (
              <figure
                key={s.title}
                className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-border bg-zinc-900"
              >
                <Image
                  src={s.src}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                  aria-hidden
                />
                <figcaption className="absolute bottom-5 left-5 right-5 flex flex-col gap-0.5">
                  <h3 className="font-display text-2xl tracking-tight text-zinc-50 leading-none">
                    {s.title}
                  </h3>
                  <p className="text-xs text-zinc-300">{s.desc}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 pb-20">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl bg-foreground text-background">
          <Image
            src="/assets/chair-hand.png"
            alt=""
            fill
            className="object-cover opacity-40"
            sizes="(max-width: 768px) 100vw, 1152px"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/90 to-foreground/30"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_60%_at_70%_30%,oklch(0.7_0.11_200/0.18),transparent_70%)]"
            aria-hidden
          />
          <div className="relative px-8 sm:px-14 py-16 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-col gap-3 max-w-lg">
              <span className="text-xs uppercase tracking-[0.18em] text-background/60">
                Próximo passo
              </span>
              <h3 className="font-display text-4xl sm:text-5xl leading-[1.05] tracking-tight">
                Pronto pra <span className="font-display-italic">marcar?</span>
              </h3>
              <p className="text-background/70 max-w-md leading-relaxed">
                Não precisa de conta. Você pode agendar como visitante em
                segundos.
              </p>
            </div>
            <Link
              href="/agendar"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-background text-foreground px-6 py-3 text-sm font-medium hover:bg-background/90 transition-colors self-start sm:self-auto"
            >
              Agendar agora
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
