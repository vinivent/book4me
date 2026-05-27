'use client';

import { useQueryClient } from '@tanstack/react-query';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { api, TOKEN_KEY } from './api';

export type AuthUser = {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  role: 'DONO' | 'CLIENTE';
};

type AuthResponse = { user: AuthUser; token: string };

type RegisterInput = {
  nome: string;
  email: string;
  telefone: string;
  password: string;
};

type AuthContextValue = {
  user: AuthUser | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<AuthUser>;
  register: (input: RegisterInput) => Promise<AuthUser>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const qc = useQueryClient();

  useEffect(() => {
    let cancelled = false;
    void (async () => {
      if (typeof window === 'undefined') return;
      const token = window.localStorage.getItem(TOKEN_KEY);
      if (!token) {
        if (!cancelled) setLoading(false);
        return;
      }
      try {
        const { data } = await api.get<AuthUser>('/auth/me');
        if (!cancelled) setUser(data);
      } catch {
        window.localStorage.removeItem(TOKEN_KEY);
        if (!cancelled) setUser(null);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const login = useCallback(
    async (email: string, password: string) => {
      const { data } = await api.post<AuthResponse>('/auth/login', {
        email,
        password,
      });
      window.localStorage.setItem(TOKEN_KEY, data.token);
      setUser(data.user);
      qc.clear();
      return data.user;
    },
    [qc],
  );

  const register = useCallback(
    async (input: RegisterInput) => {
      const { data } = await api.post<AuthResponse>('/auth/register', input);
      window.localStorage.setItem(TOKEN_KEY, data.token);
      setUser(data.user);
      qc.clear();
      return data.user;
    },
    [qc],
  );

  const logout = useCallback(() => {
    window.localStorage.removeItem(TOKEN_KEY);
    setUser(null);
    qc.clear();
  }, [qc]);

  const value = useMemo<AuthContextValue>(
    () => ({ user, loading, login, register, logout }),
    [user, loading, login, register, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth deve estar dentro de <AuthProvider>');
  }
  return ctx;
}
