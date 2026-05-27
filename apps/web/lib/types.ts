export type Business = {
  id: string;
  nome: string;
  tipo: string;
  createdAt: string;
};

export type Service = {
  id: string;
  businessId: string;
  nome: string;
  duracaoMin: number;
  preco: string;
  createdAt: string;
};

export type Slot = {
  id: string;
  businessId: string;
  inicio: string;
  fim: string;
  disponivel: boolean;
  createdAt: string;
};

export type BookingStatus = 'CONFIRMADO' | 'CANCELADO';

export type Booking = {
  id: string;
  slotId: string;
  serviceId: string;
  userId: string | null;
  clienteNome: string;
  clienteTelefone: string;
  clienteEmail: string;
  status: BookingStatus;
  createdAt: string;
  service: Service;
  slot: Slot;
};
