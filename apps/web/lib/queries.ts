'use client';

import {
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { api } from './api';
import type { Booking, Business, Service, Slot } from './types';

export const queryKeys = {
  businesses: ['businesses'] as const,
  services: (businessId?: string) => ['services', businessId] as const,
  slots: (filter: { businessId?: string; disponivel?: boolean }) =>
    ['slots', filter] as const,
  bookings: ['bookings'] as const,
};

export function useBusinesses() {
  return useQuery({
    queryKey: queryKeys.businesses,
    queryFn: async () => {
      const { data } = await api.get<Business[]>('/businesses');
      return data;
    },
  });
}

export function useActiveBusiness() {
  const q = useBusinesses();
  return { ...q, business: q.data?.[0] };
}

export function useServices(businessId?: string) {
  return useQuery({
    queryKey: queryKeys.services(businessId),
    enabled: !!businessId,
    queryFn: async () => {
      const { data } = await api.get<Service[]>('/services', {
        params: { businessId },
      });
      return data;
    },
  });
}

type CreateServiceInput = {
  businessId: string;
  nome: string;
  duracaoMin: number;
  preco: number;
};

export function useCreateService() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input: CreateServiceInput) => {
      const { data } = await api.post<Service>('/services', input);
      return data;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['services'] });
    },
  });
}

export function useDeleteService() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      await api.delete(`/services/${id}`);
      return id;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['services'] });
    },
  });
}

export function useSlots(filter: {
  businessId?: string;
  disponivel?: boolean;
}) {
  return useQuery({
    queryKey: queryKeys.slots(filter),
    enabled: !!filter.businessId,
    queryFn: async () => {
      const { data } = await api.get<Slot[]>('/slots', {
        params: {
          businessId: filter.businessId,
          ...(filter.disponivel !== undefined && {
            disponivel: filter.disponivel,
          }),
        },
      });
      return data;
    },
  });
}

type GenerateSlotsInput = {
  businessId: string;
  inicio: string;
  fim: string;
  duracaoMin: number;
};

export function useGenerateSlots() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input: GenerateSlotsInput) => {
      const { data } = await api.post<{ criados: number }>('/slots', input);
      return data;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['slots'] });
    },
  });
}

export function useBookings() {
  return useQuery({
    queryKey: queryKeys.bookings,
    queryFn: async () => {
      const { data } = await api.get<Booking[]>('/bookings');
      return data;
    },
  });
}

type CreateBookingInput = {
  slotId: string;
  serviceId: string;
  clienteNome: string;
  clienteTelefone: string;
  clienteEmail: string;
};

export function useCreateBooking() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input: CreateBookingInput) => {
      const { data } = await api.post<Booking>('/bookings', input);
      return data;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['slots'] });
      qc.invalidateQueries({ queryKey: ['bookings'] });
    },
  });
}

export function useCancelBooking() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const { data } = await api.patch<Booking>(`/bookings/${id}/cancel`);
      return data;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['bookings'] });
      qc.invalidateQueries({ queryKey: ['slots'] });
    },
  });
}
