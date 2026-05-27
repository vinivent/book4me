'use client';

import { isAxiosError } from 'axios';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
import { AuthSplit } from '@/components/auth-split';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/lib/auth';
import { maskPhone, unmaskPhone } from '@/lib/format';

const EMAIL_RX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Step = 1 | 2 | 3;

const STEPS: Record<
  Step,
  { eyebrow: string; title: string; subtitle: string }
> = {
  1: {
    eyebrow: '01 · Identidade',
    title: 'Como devemos te chamar?',
    subtitle: 'Use o nome que aparece nos documentos.',
  },
  2: {
    eyebrow: '02 · Acesso',
    title: 'Crie seu acesso.',
    subtitle: 'Você usa para entrar e receber confirmações.',
  },
  3: {
    eyebrow: '03 · Contato',
    title: 'E pra te encontrar?',
    subtitle: 'Usamos só pra confirmar suas reservas.',
  },
};

function ProgressBar({ step }: { step: Step }) {
  return (
    <div className="flex items-center gap-1.5" aria-label={`Etapa ${step} de 3`}>
      {[1, 2, 3].map((n) => (
        <span
          key={n}
          className={[
            'h-1 flex-1 rounded-full transition-colors',
            n < step
              ? 'bg-brand'
              : n === step
                ? 'bg-foreground'
                : 'bg-border',
          ].join(' ')}
          aria-hidden
        />
      ))}
    </div>
  );
}

export default function CadastroPage() {
  const router = useRouter();
  const { register } = useAuth();

  const [step, setStep] = useState<Step>(1);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [telefone, setTelefone] = useState('');
  const [submitting, setSubmitting] = useState(false);

  function goNext() {
    if (step === 1) {
      if (nome.trim().length < 2) {
        toast.error('Nome muito curto.');
        return;
      }
      setStep(2);
      return;
    }
    if (step === 2) {
      const e = email.trim().toLowerCase();
      if (!EMAIL_RX.test(e)) {
        toast.error('Email inválido.');
        return;
      }
      if (password.length < 6) {
        toast.error('Senha precisa ter pelo menos 6 caracteres.');
        return;
      }
      setStep(3);
      return;
    }
  }

  function goBack() {
    if (step > 1) setStep((step - 1) as Step);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (step !== 3) {
      goNext();
      return;
    }

    const digits = unmaskPhone(telefone);
    if (digits.length < 10 || digits.length > 11) {
      toast.error('Telefone inválido. Use DDD + número.');
      return;
    }

    setSubmitting(true);
    try {
      const user = await register({
        nome: nome.trim(),
        email: email.trim().toLowerCase(),
        telefone: digits,
        password,
      });
      toast.success(`Conta criada. Bem-vindo, ${user.nome.split(' ')[0]}.`);
      router.replace('/');
    } catch (err) {
      const msg =
        isAxiosError(err) && err.response?.status === 409
          ? 'Esse email já está cadastrado.'
          : 'Não consegui criar a conta agora.';
      toast.error(msg);
    } finally {
      setSubmitting(false);
    }
  }

  const meta = STEPS[step];

  return (
    <AuthSplit title={meta.title} subtitle={meta.subtitle}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <ProgressBar step={step} />
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            {meta.eyebrow}
          </span>
        </div>

        {step === 1 && (
          <div
            key="step-1"
            className="animate-fade-up flex flex-col gap-1.5"
            style={{ '--d': '0ms' } as React.CSSProperties}
          >
            <Label htmlFor="cad-nome">Nome completo</Label>
            <Input
              id="cad-nome"
              autoComplete="name"
              placeholder="Maria Silva"
              autoFocus
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              className="h-11 text-base"
            />
            <p className="text-xs text-muted-foreground mt-1">
              O nome que aparecerá nas suas reservas.
            </p>
          </div>
        )}

        {step === 2 && (
          <div
            key="step-2"
            className="animate-fade-up flex flex-col gap-4"
            style={{ '--d': '0ms' } as React.CSSProperties}
          >
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="cad-email">Email</Label>
              <Input
                id="cad-email"
                type="email"
                autoComplete="email"
                placeholder="voce@email.com"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-11 text-base"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="cad-pwd">Senha</Label>
              <Input
                id="cad-pwd"
                type="password"
                autoComplete="new-password"
                placeholder="Mínimo 6 caracteres"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="h-11 text-base"
              />
              <p className="text-xs text-muted-foreground mt-0.5">
                {password.length === 0
                  ? '6 caracteres ou mais.'
                  : password.length < 6
                    ? `Faltam ${6 - password.length}.`
                    : 'Senha aceita.'}
              </p>
            </div>
          </div>
        )}

        {step === 3 && (
          <div
            key="step-3"
            className="animate-fade-up flex flex-col gap-1.5"
            style={{ '--d': '0ms' } as React.CSSProperties}
          >
            <Label htmlFor="cad-tel">Telefone</Label>
            <Input
              id="cad-tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="(11) 91234-5678"
              autoFocus
              value={telefone}
              onChange={(e) => setTelefone(maskPhone(e.target.value))}
              required
              className="h-11 text-base font-mono tabular-nums"
            />
            <p className="text-xs text-muted-foreground mt-1">
              DDD + número. Usamos só pra confirmar suas reservas.
            </p>
          </div>
        )}

        <div className="flex items-center justify-between gap-2 pt-2">
          {step > 1 ? (
            <Button
              type="button"
              variant="ghost"
              onClick={goBack}
              disabled={submitting}
              className="gap-1.5"
            >
              <ArrowLeft className="size-4" />
              Voltar
            </Button>
          ) : (
            <span className="text-sm text-muted-foreground">
              Já tem conta?{' '}
              <Link
                href="/login"
                className="text-foreground font-medium hover:opacity-80"
              >
                Entrar
              </Link>
            </span>
          )}

          <Button
            type="submit"
            size="lg"
            disabled={submitting}
            className="gap-1.5"
          >
            {step === 3 ? (
              submitting ? (
                'Criando…'
              ) : (
                <>
                  <Check className="size-4" />
                  Criar conta
                </>
              )
            ) : (
              <>
                Continuar
                <ArrowRight className="size-4" />
              </>
            )}
          </Button>
        </div>
      </form>
    </AuthSplit>
  );
}
