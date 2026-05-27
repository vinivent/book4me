'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth, type AuthUser } from './auth';

export function useRequireAuth(role?: AuthUser['role']) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;
    if (!user) {
      router.replace('/login');
      return;
    }
    if (role && user.role !== role) {
      router.replace('/');
    }
  }, [user, loading, role, router]);

  return {
    user,
    loading,
    ready: !loading && !!user && (!role || user.role === role),
  };
}
