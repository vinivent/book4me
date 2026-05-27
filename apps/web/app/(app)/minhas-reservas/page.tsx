'use client';

import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'sonner';
import { ConfirmDialog } from '@/components/confirm-dialog';
import { EmptyState } from '@/components/empty-state';
import { Badge } from '@/components/ui/badge';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useAuth } from '@/lib/auth';
import { formatDateTime, formatMoney, formatPhone } from '@/lib/format';
import { useBookings, useCancelBooking } from '@/lib/queries';
import type { Booking } from '@/lib/types';
import { useRequireAuth } from '@/lib/use-require-auth';

export default function MinhasReservasPage() {
  const { ready } = useRequireAuth();
  const { user } = useAuth();
  const { data: bookings, isLoading } = useBookings();
  const cancel = useCancelBooking();
  const [toCancel, setToCancel] = useState<Booking | null>(null);

  function handleConfirmCancel() {
    if (!toCancel) return;
    cancel.mutate(toCancel.id, {
      onSuccess: () => {
        toast.success('Reserva cancelada.');
        setToCancel(null);
      },
      onError: () => toast.error('Não consegui cancelar.'),
    });
  }

  if (!ready) {
    return (
      <main className="mx-auto w-full max-w-3xl px-6 py-12 flex flex-col gap-4">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-24" />
        <Skeleton className="h-24" />
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-4xl px-6 lg:px-10 py-12 flex flex-col gap-8">
      <header className="flex flex-col gap-2">
        <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Reservas
        </span>
        <h1 className="font-display text-4xl sm:text-5xl tracking-tight leading-[1.05]">
          {user?.role === 'DONO' ? (
            <>
              Todas as <span className="font-display-italic">reservas</span>
            </>
          ) : (
            <>
              Minhas <span className="font-display-italic">reservas</span>
            </>
          )}
        </h1>
      </header>

      <div className="flex flex-col gap-2">
        {isLoading ? (
          <>
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
          </>
        ) : bookings && bookings.length > 0 ? (
          bookings.map((b) => {
            const cancelled = b.status === 'CANCELADO';
            return (
              <Card key={b.id} className={cancelled ? 'opacity-60' : ''}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="font-display text-xl tracking-tight">
                    {b.service.nome}
                  </CardTitle>
                  <Badge variant={cancelled ? 'outline' : 'secondary'}>
                    {cancelled ? 'Cancelado' : 'Confirmado'}
                  </Badge>
                </CardHeader>
                <CardContent className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-col text-sm">
                    <span className="font-medium text-foreground">
                      {formatDateTime(b.slot.inicio)}
                    </span>
                    <span className="text-muted-foreground">
                      {b.clienteNome} · {formatPhone(b.clienteTelefone)} ·{' '}
                      <span className="font-mono tabular-nums">
                        {formatMoney(b.service.preco)}
                      </span>
                    </span>
                  </div>
                  {!cancelled && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setToCancel(b)}
                    >
                      Cancelar
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })
        ) : (
          <EmptyState
            title="Nenhuma reserva por aqui."
            description={
              user?.role === 'DONO'
                ? 'Quando alguém agendar, as reservas aparecem aqui.'
                : 'Que tal escolher um horário agora?'
            }
            action={
              user?.role === 'DONO' ? null : (
                <Link
                  href="/agendar"
                  className={buttonVariants({ size: 'sm' })}
                >
                  Agendar horário
                </Link>
              )
            }
          />
        )}
      </div>

      <ConfirmDialog
        open={!!toCancel}
        onOpenChange={(open) => !open && setToCancel(null)}
        title="Cancelar reserva?"
        description={
          toCancel
            ? `${toCancel.service.nome} em ${formatDateTime(toCancel.slot.inicio)}. Essa ação não pode ser desfeita.`
            : 'Essa ação não pode ser desfeita.'
        }
        confirmLabel="Sim, cancelar"
        cancelLabel="Voltar"
        loading={cancel.isPending}
        onConfirm={handleConfirmCancel}
      />
    </main>
  );
}
