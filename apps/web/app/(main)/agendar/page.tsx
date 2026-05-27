'use client';

import { isAxiosError } from 'axios';
import { useEffect, useMemo, useState } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Skeleton } from '@/components/ui/skeleton';
import { useAuth } from '@/lib/auth';
import {
  formatDay,
  formatMoney,
  formatTime,
  maskPhone,
  unmaskPhone,
} from '@/lib/format';
import {
  useActiveBusiness,
  useCreateBooking,
  useServices,
  useSlots,
} from '@/lib/queries';
import type { Service, Slot } from '@/lib/types';

const EMAIL_RX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function AgendarPage() {
  const { user } = useAuth();
  const { business, isLoading: bizLoading } = useActiveBusiness();
  const { data: services, isLoading: servicesLoading } = useServices(
    business?.id,
  );
  const { data: slots, isLoading: slotsLoading } = useSlots({
    businessId: business?.id,
    disponivel: true,
  });

  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [pendingSlot, setPendingSlot] = useState<Slot | null>(null);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  const createBooking = useCreateBooking();

  useEffect(() => {
    if (!user) return;
    let cancelled = false;
    void Promise.resolve().then(() => {
      if (cancelled) return;
      setNome(user.nome);
      setEmail(user.email);
      setTelefone(maskPhone(user.telefone));
    });
    return () => {
      cancelled = true;
    };
  }, [user]);

  const slotsByDay = useMemo(() => {
    if (!slots) return new Map<string, Slot[]>();
    const map = new Map<string, Slot[]>();
    for (const s of slots) {
      const key = new Date(s.inicio).toDateString();
      const arr = map.get(key) ?? [];
      arr.push(s);
      map.set(key, arr);
    }
    return map;
  }, [slots]);

  function resetForm() {
    if (user) {
      setNome(user.nome);
      setEmail(user.email);
      setTelefone(maskPhone(user.telefone));
    } else {
      setNome('');
      setEmail('');
      setTelefone('');
    }
  }

  function handleConfirm() {
    if (!pendingSlot || !selectedService) return;

    const trimmedNome = nome.trim();
    const trimmedEmail = email.trim().toLowerCase();
    const digits = unmaskPhone(telefone);

    if (trimmedNome.length < 2) {
      toast.error('Informe seu nome completo.');
      return;
    }
    if (!EMAIL_RX.test(trimmedEmail)) {
      toast.error('Email inválido.');
      return;
    }
    if (digits.length < 10 || digits.length > 11) {
      toast.error('Telefone inválido. Use DDD + número.');
      return;
    }

    createBooking.mutate(
      {
        slotId: pendingSlot.id,
        serviceId: selectedService.id,
        clienteNome: trimmedNome,
        clienteEmail: trimmedEmail,
        clienteTelefone: digits,
      },
      {
        onSuccess: () => {
          toast.success('Reserva confirmada!');
          setPendingSlot(null);
          resetForm();
        },
        onError: (err) => {
          if (isAxiosError(err) && err.response?.status === 409) {
            toast.error(
              'Esse horário acabou de ser reservado. Escolha outro.',
            );
            setPendingSlot(null);
          } else {
            toast.error('Não consegui confirmar. Tente de novo.');
          }
        },
      },
    );
  }

  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-12 flex flex-col gap-12">
      <header className="flex flex-col gap-2">
        <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Agendar
        </span>
        <h1 className="font-display text-4xl sm:text-5xl tracking-tight leading-[1.05]">
          {bizLoading ? (
            <Skeleton className="h-10 w-64" />
          ) : (
            (business?.nome ?? 'Nenhum negócio disponível')
          )}
        </h1>
        {!user && (
          <p className="text-sm text-muted-foreground max-w-md mt-1">
            Você pode agendar como visitante. Preencha seus dados na hora de
            confirmar.
          </p>
        )}
      </header>

      <section className="flex flex-col gap-4">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-xs text-brand tabular-nums">01</span>
          <h2 className="font-display text-2xl tracking-tight">
            Escolha o serviço
          </h2>
        </div>
        {servicesLoading ? (
          <div className="grid gap-2 sm:grid-cols-2">
            <Skeleton className="h-20" />
            <Skeleton className="h-20" />
          </div>
        ) : services && services.length > 0 ? (
          <div className="grid gap-2 sm:grid-cols-2">
            {services.map((s) => {
              const active = selectedService?.id === s.id;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setSelectedService(s)}
                  className={[
                    'text-left rounded-lg border bg-card p-4 transition-colors',
                    active
                      ? 'border-brand ring-1 ring-brand/30'
                      : 'border-border hover:border-foreground/30',
                  ].join(' ')}
                >
                  <div className="font-display text-xl tracking-tight">
                    {s.nome}
                  </div>
                  <div className="text-sm text-muted-foreground mt-0.5">
                    {s.duracaoMin} min ·{' '}
                    <span className="font-mono tabular-nums">
                      {formatMoney(s.preco)}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">
            Nenhum serviço disponível no momento.
          </p>
        )}
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-xs text-brand tabular-nums">02</span>
          <h2 className="font-display text-2xl tracking-tight">
            Escolha um horário
          </h2>
          {!selectedService && (
            <span className="ml-auto text-xs text-muted-foreground">
              selecione um serviço acima
            </span>
          )}
        </div>

        {selectedService &&
          (slotsLoading ? (
            <div className="grid gap-2">
              <Skeleton className="h-24" />
              <Skeleton className="h-24" />
            </div>
          ) : slotsByDay.size > 0 ? (
            <div className="flex flex-col gap-3">
              {Array.from(slotsByDay.entries()).map(([day, daySlots]) => (
                <Card key={day}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-normal text-muted-foreground capitalize">
                      {formatDay(daySlots[0].inicio)}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {daySlots.map((slot) => (
                      <Button
                        key={slot.id}
                        variant="outline"
                        size="sm"
                        onClick={() => setPendingSlot(slot)}
                      >
                        {formatTime(slot.inicio)}
                      </Button>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">
              Nenhum horário livre no momento.
            </p>
          ))}
      </section>

      <Dialog
        open={!!pendingSlot}
        onOpenChange={(open) => !open && setPendingSlot(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmar reserva</DialogTitle>
            <DialogDescription>
              {selectedService && pendingSlot && (
                <>
                  {selectedService.nome} ·{' '}
                  <span className="capitalize">
                    {formatDay(pendingSlot.inicio)}
                  </span>{' '}
                  às {formatTime(pendingSlot.inicio)}
                </>
              )}
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="cli-nome">Nome completo</Label>
              <Input
                id="cli-nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="cli-email">Email</Label>
              <Input
                id="cli-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="cli-tel">Telefone</Label>
              <Input
                id="cli-tel"
                inputMode="tel"
                value={telefone}
                onChange={(e) => setTelefone(maskPhone(e.target.value))}
              />
            </div>
          </div>

          <DialogFooter>
            <Button
              variant="ghost"
              onClick={() => setPendingSlot(null)}
              disabled={createBooking.isPending}
            >
              Cancelar
            </Button>
            <Button
              onClick={handleConfirm}
              disabled={createBooking.isPending}
            >
              {createBooking.isPending ? 'Confirmando…' : 'Confirmar reserva'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}
