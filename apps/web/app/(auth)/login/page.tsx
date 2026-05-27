'use client';

import { isAxiosError } from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
import { AuthSplit } from '@/components/auth-split';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/lib/auth';

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const user = await login(email.trim(), password);
      toast.success(`Olá, ${user.nome.split(' ')[0]}.`);
      router.replace(user.role === 'DONO' ? '/dono' : '/');
    } catch (err) {
      const msg =
        isAxiosError(err) && err.response?.status === 401
          ? 'Email ou senha incorretos.'
          : 'Não consegui entrar agora. Tente de novo.';
      toast.error(msg);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <AuthSplit
      title="Entrar na sua conta"
      subtitle="Acesse seus agendamentos ou seu painel."
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="login-email">Email</Label>
          <Input
            id="login-email"
            type="email"
            autoComplete="email"
            placeholder="voce@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="login-pwd">Senha</Label>
          <Input
            id="login-pwd"
            type="password"
            autoComplete="current-password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button type="submit" size="lg" disabled={submitting} className="w-full mt-2">
          {submitting ? 'Entrando…' : 'Entrar'}
        </Button>
        <p className="text-sm text-muted-foreground">
          Ainda não tem conta?{' '}
          <Link
            href="/cadastro"
            className="text-foreground font-medium hover:opacity-80"
          >
            Criar agora
          </Link>
        </p>
      </form>
    </AuthSplit>
  );
}
