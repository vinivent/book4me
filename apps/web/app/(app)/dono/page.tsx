'use client';

import { ptBR } from 'date-fns/locale';
import { CalendarIcon, Clock, Sparkles, Trash2 } from 'lucide-react';
import { useMemo, useState } from 'react';
import { toast } from 'sonner';
import { ConfirmDialog } from '@/components/confirm-dialog';
import { EmptyState } from '@/components/empty-state';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import { formatMoney, formatTime } from '@/lib/format';
import {
  useActiveBusiness,
  useCreateService,
  useDeleteService,
  useGenerateSlots,
  useServices,
  useSlots,
} from '@/lib/queries';
import type { Service, Slot } from '@/lib/types';
import { useRequireAuth } from '@/lib/use-require-auth';

const TIME_OPTIONS = (() => {
  const out: string[] = [];
  for (let h = 6; h <= 22; h++) {
    out.push(`${String(h).padStart(2, '0')}:00`);
    out.push(`${String(h).padStart(2, '0')}:30`);
  }
  return out;
})();

function formatDateLong(date: Date): string {
  return new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
  }).format(date);
}

export default function DonoPage() {
  const { ready } = useRequireAuth('DONO');
  const { business, isLoading: bizLoading } = useActiveBusiness();

  if (!ready) {
    return (
      <main className="mx-auto w-full max-w-4xl px-6 lg:px-10 py-12">
        <Skeleton className="h-10 w-64 mb-8" />
        <Skeleton className="h-40" />
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-4xl px-6 lg:px-10 py-12 flex flex-col gap-12">
      <header className="flex flex-col gap-2">
        <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Painel do dono
        </span>
        <h1 className="font-display text-4xl sm:text-5xl tracking-tight leading-[1.05]">
          {bizLoading ? (
            <Skeleton className="h-10 w-64" />
          ) : (
            (business?.nome ?? 'Nenhum negócio cadastrado')
          )}
        </h1>
      </header>

      {business && (
        <>
          <ServicesSection businessId={business.id} />
          <Separator />
          <SlotsSection businessId={business.id} />
        </>
      )}
    </main>
  );
}

function ServicesSection({ businessId }: { businessId: string }) {
  const { data: services, isLoading } = useServices(businessId);
  const createService = useCreateService();
  const deleteService = useDeleteService();

  const [nome, setNome] = useState('');
  const [duracaoMin, setDuracaoMin] = useState('');
  const [preco, setPreco] = useState('');
  const [toDelete, setToDelete] = useState<Service | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!nome || !duracaoMin || !preco) return;

    createService.mutate(
      {
        businessId,
        nome,
        duracaoMin: Number(duracaoMin),
        preco: Number(preco),
      },
      {
        onSuccess: () => {
          toast.success('Serviço criado.');
          setNome('');
          setDuracaoMin('');
          setPreco('');
        },
        onError: () => toast.error('Não consegui criar o serviço.'),
      },
    );
  }

  function handleConfirmDelete() {
    if (!toDelete) return;
    deleteService.mutate(toDelete.id, {
      onSuccess: () => {
        toast.success('Serviço removido.');
        setToDelete(null);
      },
      onError: () => toast.error('Não consegui remover.'),
    });
  }

  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h2 className="font-display text-3xl tracking-tight">Serviços</h2>
        <p className="text-sm text-muted-foreground">
          Cada serviço tem duração e preço próprios.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base font-medium">Novo serviço</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit}
            className="grid gap-3 sm:grid-cols-[1fr_120px_140px_auto] sm:items-end"
          >
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="svc-nome">Nome</Label>
              <Input
                id="svc-nome"
                placeholder="Corte"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="svc-dur">Duração (min)</Label>
              <Input
                id="svc-dur"
                type="number"
                inputMode="numeric"
                min={1}
                placeholder="30"
                value={duracaoMin}
                onChange={(e) => setDuracaoMin(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="svc-preco">Preço (R$)</Label>
              <Input
                id="svc-preco"
                type="number"
                inputMode="decimal"
                min={0}
                step="0.01"
                placeholder="40.00"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
              />
            </div>
            <Button type="submit" disabled={createService.isPending}>
              {createService.isPending ? 'Salvando…' : 'Adicionar'}
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-2">
        {isLoading ? (
          <>
            <Skeleton className="h-14 w-full" />
            <Skeleton className="h-14 w-full" />
          </>
        ) : services && services.length > 0 ? (
          services.map((s) => (
            <Card key={s.id}>
              <CardContent className="flex items-center justify-between py-4">
                <div className="flex flex-col">
                  <span className="font-display text-xl tracking-tight">
                    {s.nome}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {s.duracaoMin} min ·{' '}
                    <span className="font-mono tabular-nums">
                      {formatMoney(s.preco)}
                    </span>
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setToDelete(s)}
                  aria-label={`Remover ${s.nome}`}
                >
                  <Trash2 className="size-4" />
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <EmptyState
            title="Nenhum serviço ainda."
            description="Adicione o primeiro acima — nome, duração e preço bastam pra começar."
          />
        )}
      </div>

      <ConfirmDialog
        open={!!toDelete}
        onOpenChange={(open) => !open && setToDelete(null)}
        title={`Remover "${toDelete?.nome ?? ''}"?`}
        description="Essa ação não pode ser desfeita. As reservas existentes desse serviço continuam, mas ele some da lista para novos agendamentos."
        confirmLabel="Remover"
        loading={deleteService.isPending}
        onConfirm={handleConfirmDelete}
      />
    </section>
  );
}

function SlotsSection({ businessId }: { businessId: string }) {
  const { data: slots, isLoading } = useSlots({ businessId });
  const generateSlots = useGenerateSlots();

  const [date, setDate] = useState<Date | undefined>(undefined);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [horaInicio, setHoraInicio] = useState('09:00');
  const [horaFim, setHoraFim] = useState('12:00');
  const [duracaoMin, setDuracaoMin] = useState('30');

  const slotsByDay = useMemo(() => {
    if (!slots) return [] as Array<{ key: string; date: Date; items: Slot[] }>;
    const map = new Map<string, { date: Date; items: Slot[] }>();
    for (const s of slots) {
      const d = new Date(s.inicio);
      const key = d.toDateString();
      const existing = map.get(key);
      if (existing) {
        existing.items.push(s);
      } else {
        map.set(key, { date: d, items: [s] });
      }
    }
    return Array.from(map.entries())
      .map(([key, value]) => ({ key, ...value }))
      .sort((a, b) => a.date.getTime() - b.date.getTime());
  }, [slots]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!date) {
      toast.error('Escolha uma data.');
      return;
    }
    if (!horaInicio || !horaFim || !duracaoMin) return;

    if (horaFim <= horaInicio) {
      toast.error('Horário final deve ser depois do inicial.');
      return;
    }

    const iso = (h: string) => {
      const [hh, mm] = h.split(':').map(Number);
      const d = new Date(date);
      d.setHours(hh, mm, 0, 0);
      return d.toISOString();
    };

    generateSlots.mutate(
      {
        businessId,
        inicio: iso(horaInicio),
        fim: iso(horaFim),
        duracaoMin: Number(duracaoMin),
      },
      {
        onSuccess: (res) =>
          toast.success(`${res.criados} horários gerados.`),
        onError: () => toast.error('Não consegui gerar os horários.'),
      },
    );
  }

  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h2 className="font-display text-3xl tracking-tight">Horários</h2>
        <p className="text-sm text-muted-foreground">
          Gere janelas consecutivas para um dia.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-base font-medium inline-flex items-center gap-2">
            <Sparkles className="size-4 text-brand" />
            Gerar horários
          </CardTitle>
          <CardDescription>
            Escolha o dia, o intervalo e a duração de cada janela.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit}
            className="grid gap-3 sm:grid-cols-[1.4fr_1fr_1fr_120px_auto] sm:items-end"
          >
            <div className="flex flex-col gap-1.5">
              <Label>Data</Label>
              <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                <PopoverTrigger
                  render={
                    <button
                      type="button"
                      className="h-9 w-full inline-flex items-center justify-between gap-2 rounded-md border border-input bg-card px-3 text-sm hover:bg-secondary/60 transition-colors"
                    />
                  }
                >
                  <span className="inline-flex items-center gap-2 truncate">
                    <CalendarIcon className="size-4 text-muted-foreground shrink-0" />
                    {date ? (
                      <span className="capitalize truncate">
                        {formatDateLong(date)}
                      </span>
                    ) : (
                      <span className="text-muted-foreground">
                        Escolher data
                      </span>
                    )}
                  </span>
                </PopoverTrigger>
                <PopoverContent
                  align="start"
                  className="w-auto p-0"
                  side="bottom"
                >
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(d) => {
                      setDate(d);
                      setPopoverOpen(false);
                    }}
                    disabled={(d) =>
                      d < new Date(new Date().setHours(0, 0, 0, 0))
                    }
                    locale={ptBR}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="slot-ini">Início</Label>
              <Select
                value={horaInicio}
                onValueChange={(v) => v && setHoraInicio(v)}
              >
                <SelectTrigger id="slot-ini">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {TIME_OPTIONS.map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="slot-fim">Fim</Label>
              <Select
                value={horaFim}
                onValueChange={(v) => v && setHoraFim(v)}
              >
                <SelectTrigger id="slot-fim">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {TIME_OPTIONS.map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="slot-dur">Duração</Label>
              <Input
                id="slot-dur"
                type="number"
                inputMode="numeric"
                min={5}
                value={duracaoMin}
                onChange={(e) => setDuracaoMin(e.target.value)}
              />
            </div>

            <Button type="submit" disabled={generateSlots.isPending}>
              {generateSlots.isPending ? 'Gerando…' : 'Gerar'}
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-3 mt-2">
        {isLoading ? (
          <>
            <Skeleton className="h-32 w-full" />
            <Skeleton className="h-32 w-full" />
          </>
        ) : slotsByDay.length > 0 ? (
          slotsByDay.map((day) => {
            const livres = day.items.filter((s) => s.disponivel).length;
            const ocupados = day.items.length - livres;
            return (
              <Card key={day.key}>
                <CardHeader className="flex flex-row items-baseline justify-between pb-3">
                  <CardTitle className="font-display text-xl tracking-tight capitalize">
                    {formatDateLong(day.date)}
                  </CardTitle>
                  <span className="font-mono text-xs text-muted-foreground tabular-nums">
                    {livres} livres · {ocupados} ocupados
                  </span>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-1.5 pt-1">
                  {day.items.map((slot) => (
                    <Badge
                      key={slot.id}
                      variant={slot.disponivel ? 'outline' : 'secondary'}
                      className={[
                        'h-8 px-3 gap-1.5 font-mono tabular-nums',
                        slot.disponivel
                          ? 'border-brand/30 text-foreground'
                          : 'text-muted-foreground line-through decoration-muted-foreground/40',
                      ].join(' ')}
                    >
                      {slot.disponivel ? (
                        <Clock className="size-3 text-brand" />
                      ) : null}
                      {formatTime(slot.inicio)}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            );
          })
        ) : (
          <EmptyState
            title="Nenhum horário gerado."
            description="Escolha um dia e um intervalo no formulário acima. Geramos as janelas pra você."
          />
        )}
      </div>
    </section>
  );
}
