'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth';

const BRAND = 'Lâmina';

export function SiteHeader() {
  const { user, loading, logout } = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const overHero = pathname === '/' && !scrolled;
  const solid = !overHero;

  const links =
    user?.role === 'DONO'
      ? [
          { href: '/dono', label: 'Painel' },
          { href: '/minhas-reservas', label: 'Reservas' },
        ]
      : user
        ? [
            { href: '/agendar', label: 'Agendar' },
            { href: '/minhas-reservas', label: 'Minhas reservas' },
          ]
        : [
            { href: '/', label: 'Início' },
            { href: '/agendar', label: 'Agendar' },
          ];

  function handleLogout() {
    logout();
    router.replace('/');
  }

  return (
    <header
      className={[
        'sticky top-0 z-40 w-full transition-colors duration-300 ease-out',
        overHero ? 'text-zinc-50' : 'text-foreground',
      ].join(' ')}
    >
      <div
        aria-hidden
        className={[
          'absolute inset-0 transition-opacity duration-300 ease-out backdrop-blur-xl bg-background/75',
          solid ? 'opacity-100' : 'opacity-0',
        ].join(' ')}
      />
      <div
        aria-hidden
        className={[
          'absolute left-0 right-0 bottom-0 h-px transition-opacity duration-300 ease-out bg-border/70',
          solid ? 'opacity-100' : 'opacity-0',
        ].join(' ')}
      />

      <div className="relative mx-auto max-w-6xl flex h-14 items-center justify-between px-6">
        <Link
          href="/"
          className={[
            'font-display text-2xl tracking-tight leading-none transition-colors duration-300',
            overHero ? 'text-zinc-50' : 'text-foreground',
          ].join(' ')}
        >
          {BRAND}
        </Link>

        <nav className="hidden sm:flex items-center gap-1 text-sm">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={[
                  'relative px-3 py-2 transition-colors duration-200',
                  overHero
                    ? active
                      ? 'text-zinc-50'
                      : 'text-zinc-400 hover:text-zinc-50'
                    : active
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground',
                ].join(' ')}
              >
                {l.label}
                {active && (
                  <span
                    className="absolute left-3 right-3 -bottom-px h-px bg-[oklch(0.7_0.11_200)]"
                    aria-hidden
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1">
          {loading ? null : user ? (
            <>
              <span
                className={[
                  'hidden sm:inline text-xs mr-2 transition-colors duration-300',
                  overHero ? 'text-zinc-400' : 'text-muted-foreground',
                ].join(' ')}
              >
                {user.nome.split(' ')[0]}
              </span>
              <button
                type="button"
                onClick={handleLogout}
                className={[
                  'h-8 px-3 rounded-md text-sm transition-colors duration-200',
                  overHero
                    ? 'text-zinc-300 hover:text-zinc-50 hover:bg-white/[0.06]'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/60',
                ].join(' ')}
              >
                Sair
              </button>
            </>
          ) : overHero ? (
            <>
              <Link
                href="/login"
                className="h-8 px-3 inline-flex items-center rounded-md text-sm text-zinc-300 hover:text-zinc-50 hover:bg-white/[0.06] transition-colors duration-200"
              >
                Entrar
              </Link>
              <Link
                href="/cadastro"
                className="h-8 px-4 inline-flex items-center rounded-md text-sm font-medium bg-zinc-50 text-zinc-950 hover:bg-zinc-200 transition-colors duration-200"
              >
                Criar conta
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="h-8 px-3 inline-flex items-center rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/60 transition-colors duration-200"
              >
                Entrar
              </Link>
              <Link
                href="/cadastro"
                className="h-8 px-4 inline-flex items-center rounded-md text-sm font-medium bg-foreground text-background hover:bg-foreground/90 transition-colors duration-200"
              >
                Criar conta
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
