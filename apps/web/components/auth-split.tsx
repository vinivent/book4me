import Image from 'next/image';
import Link from 'next/link';

function BrandMark() {
  return (
    <span className="grid size-7 place-items-center rounded-md bg-foreground text-background">
      <span className="size-1.5 rounded-full bg-background" aria-hidden />
    </span>
  );
}

type Props = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  visualHeadline?: string;
  visualSub?: string;
};

export function AuthSplit({
  title,
  subtitle,
  children,
  visualHeadline = 'Marcar horário tão fácil quanto mandar uma mensagem.',
  visualSub = 'Lâmina. Agendamento sem fricção para qualquer negócio.',
}: Props) {
  return (
    <div className="min-h-screen grid lg:grid-cols-[1.05fr_1fr]">
      <div className="flex flex-col px-6 py-8 sm:px-10 lg:px-16 lg:py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-medium tracking-tight text-foreground self-start"
        >
          <BrandMark />
          Lâmina
        </Link>

        <div className="flex-1 flex flex-col justify-center max-w-sm w-full mx-auto">
          <div className="flex flex-col gap-2 mb-8">
            <h1 className="font-display text-4xl sm:text-5xl tracking-tight leading-[1.05]">
              {title}
            </h1>
            {subtitle && (
              <p className="text-muted-foreground">{subtitle}</p>
            )}
          </div>
          {children}
        </div>

        <p className="text-xs text-muted-foreground self-start">
          © {new Date().getFullYear()} Lâmina
        </p>
      </div>

      <div className="hidden lg:flex relative overflow-hidden bg-zinc-950 text-zinc-100">
        <Image
          src="/assets/chair.png"
          alt=""
          fill
          className="object-cover opacity-55"
          sizes="(max-width: 1024px) 0vw, 50vw"
          priority
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/75 to-zinc-950/30"
          aria-hidden
        />
        <div
          className="absolute inset-0 [background:radial-gradient(60%_60%_at_80%_20%,oklch(0.62_0.11_200/0.10),transparent_60%)]"
          aria-hidden
        />
        <div className="relative flex flex-col justify-between w-full p-14 lg:p-16">
          <div className="flex items-center gap-2 text-sm text-zinc-400">
            <span className="grid size-6 place-items-center rounded-md bg-white/10">
              <span
                className="size-1.5 rounded-full bg-white/80"
                aria-hidden
              />
            </span>
            Lâmina
          </div>

          <figure className="flex flex-col gap-5 max-w-md">
            <span className="text-xs uppercase tracking-[0.18em] text-zinc-500">
              Por que Lâmina
            </span>
            <blockquote className="font-display text-4xl sm:text-5xl leading-[1.05] tracking-tight text-zinc-50">
              {visualHeadline.split('.').map((part, i, arr) =>
                part.trim() ? (
                  <span key={i} className="block">
                    {part.trim()}
                    {i < arr.length - 1 && '.'}
                  </span>
                ) : null,
              )}
            </blockquote>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-sm">
              {visualSub}
            </p>
          </figure>

          <div className="flex items-center gap-3 text-xs text-zinc-500 font-mono uppercase tracking-[0.15em]">   
          </div>
        </div>
      </div>
    </div>
  );
}
