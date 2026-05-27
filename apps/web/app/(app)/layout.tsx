'use client';

import { LogOut } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AppSidebar } from '@/components/app-sidebar';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { useAuth } from '@/lib/auth';

function MobileTopBar() {
  const { user, logout } = useAuth();
  const router = useRouter();

  function handleLogout() {
    logout();
    router.replace('/');
  }

  return (
    <header className="lg:hidden sticky top-0 z-10 bg-background border-b border-border">
      <div className="flex items-center justify-between px-4 h-14">
        <div className="flex items-center gap-2">
          <SidebarTrigger className="text-foreground" />
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-medium tracking-tight text-foreground"
          >
            <span className="grid size-6 place-items-center rounded-md bg-foreground text-background">
              <span className="size-1.5 rounded-full bg-background" aria-hidden />
            </span>
            Lâmina
          </Link>
        </div>
        {user && (
          <button
            type="button"
            onClick={handleLogout}
            aria-label="Sair"
            className="grid size-8 place-items-center rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
          >
            <LogOut className="size-4" />
          </button>
        )}
      </div>
    </header>
  );
}

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider defaultOpen>
      <AppSidebar />
      <SidebarInset className="bg-background">
        <MobileTopBar />
        <div className="flex-1 flex flex-col">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
