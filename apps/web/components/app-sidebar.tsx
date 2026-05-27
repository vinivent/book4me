'use client';

import {
  CalendarCheck,
  CalendarPlus,
  Home,
  LayoutDashboard,
  LogOut,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import type { ComponentType } from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import { useAuth } from '@/lib/auth';

type NavItem = {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
};

function initialsOf(nome: string): string {
  const parts = nome.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? '';
  const last = parts.length > 1 ? parts[parts.length - 1][0] : '';
  return (first + last).toUpperCase();
}

function BrandMark() {
  return (
    <span className="grid size-7 place-items-center rounded-md bg-zinc-50 text-zinc-950">
      <span className="size-1.5 rounded-full bg-zinc-950" aria-hidden />
    </span>
  );
}

const DARK_SIDEBAR_TOKENS = {
  '--sidebar': 'oklch(0.155 0.005 286)',
  '--sidebar-foreground': 'oklch(0.78 0.005 286)',
  '--sidebar-accent': 'oklch(1 0 0 / 0.05)',
  '--sidebar-accent-foreground': 'oklch(0.985 0 0)',
  '--sidebar-border': 'oklch(1 0 0 / 0.07)',
  '--sidebar-ring': 'var(--brand)',
} as React.CSSProperties;

export function AppSidebar() {
  const { user, logout } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  const items: NavItem[] =
    user?.role === 'DONO'
      ? [
          { label: 'Painel', href: '/dono', icon: LayoutDashboard },
          { label: 'Reservas', href: '/minhas-reservas', icon: CalendarCheck },
        ]
      : [
          {
            label: 'Minhas reservas',
            href: '/minhas-reservas',
            icon: CalendarCheck,
          },
          { label: 'Agendar', href: '/agendar', icon: CalendarPlus },
        ];

  function handleLogout() {
    logout();
    router.replace('/');
  }

  return (
    <Sidebar
      collapsible="offcanvas"
      style={DARK_SIDEBAR_TOKENS}
      className="border-r-0 bg-grain bg-grain-dark"
    >
      <SidebarHeader className="px-5 py-5 border-b border-sidebar-border">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-zinc-50 font-medium tracking-tight"
        >
          Lâmina
        </Link>
      </SidebarHeader>

      <SidebarContent className="px-3 py-4">
        <SidebarGroup className="p-0">
          <SidebarGroupLabel className="px-3 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500 h-7">
            Workspace
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const Icon = item.icon;
                const active = pathname === item.href;
                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      isActive={active}
                      tooltip={item.label}
                      render={
                        <Link
                          href={item.href}
                          className={[
                            'relative group flex items-center gap-2.5 px-3 py-2 rounded-md text-sm',
                            active
                              ? 'data-active:bg-white/[0.06] data-active:text-zinc-50'
                              : 'text-zinc-400 hover:text-zinc-100',
                          ].join(' ')}
                        />
                      }
                    >
                      {active && (
                        <span
                          className="absolute left-0 top-1.5 bottom-1.5 w-0.5 rounded-r bg-[oklch(0.7_0.11_200)]"
                          aria-hidden
                        />
                      )}
                      <Icon
                        className={[
                          'size-4 shrink-0',
                          active
                            ? 'text-[oklch(0.7_0.11_200)]'
                            : 'text-zinc-500 group-hover:text-zinc-200 transition-colors',
                        ].join(' ')}
                      />
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator className="my-4 bg-sidebar-border" />

        <SidebarGroup className="p-0">
          <SidebarGroupLabel className="px-3 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500 h-7">
            Geral
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  tooltip="Voltar ao site"
                  render={
                    <Link
                      href="/"
                      className="group flex items-center gap-2.5 px-3 py-2 rounded-md text-sm text-zinc-400 hover:text-zinc-100"
                    />
                  }
                >
                  <Home className="size-4 text-zinc-500 group-hover:text-zinc-200 transition-colors" />
                  <span>Voltar ao site</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {user && (
        <SidebarFooter className="px-3 py-3 border-t border-sidebar-border">
          <div className="flex items-center gap-3 px-2 py-2 rounded-md">
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/10 text-zinc-100 text-xs font-medium">
              {initialsOf(user.nome)}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm text-zinc-100 font-medium truncate">
                {user.nome}
              </p>
              <p className="text-xs text-zinc-500 truncate">{user.email}</p>
            </div>
            <button
              type="button"
              onClick={handleLogout}
              aria-label="Sair"
              className="grid size-8 shrink-0 place-items-center rounded-md text-zinc-400 hover:text-zinc-50 hover:bg-white/10 transition-colors"
            >
              <LogOut className="size-4" />
            </button>
          </div>
        </SidebarFooter>
      )}
    </Sidebar>
  );
}
