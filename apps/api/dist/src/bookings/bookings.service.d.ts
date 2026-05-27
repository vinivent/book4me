import { PrismaService } from '../prisma/prisma.service';
import type { AuthUser } from '../auth/types';
import { CreateBookingDto } from './dto/create-booking.dto';
export declare class BookingsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(user: AuthUser): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        service: {
            id: string;
            nome: string;
            createdAt: Date;
            businessId: string;
            duracaoMin: number;
            preco: import("@prisma/client-runtime-utils").Decimal;
        };
        slot: {
            id: string;
            createdAt: Date;
            businessId: string;
            inicio: Date;
            fim: Date;
            disponivel: boolean;
        };
    } & {
        id: string;
        createdAt: Date;
        slotId: string;
        serviceId: string;
        clienteNome: string;
        clienteTelefone: string;
        clienteEmail: string;
        userId: string | null;
        status: import("../../generated/prisma/enums").BookingStatus;
    })[]>;
    create(dto: CreateBookingDto, user?: AuthUser): Promise<{
        service: {
            id: string;
            nome: string;
            createdAt: Date;
            businessId: string;
            duracaoMin: number;
            preco: import("@prisma/client-runtime-utils").Decimal;
        };
        slot: {
            id: string;
            createdAt: Date;
            businessId: string;
            inicio: Date;
            fim: Date;
            disponivel: boolean;
        };
    } & {
        id: string;
        createdAt: Date;
        slotId: string;
        serviceId: string;
        clienteNome: string;
        clienteTelefone: string;
        clienteEmail: string;
        userId: string | null;
        status: import("../../generated/prisma/enums").BookingStatus;
    }>;
    cancel(id: string, user: AuthUser): Promise<{
        id: string;
        createdAt: Date;
        slotId: string;
        serviceId: string;
        clienteNome: string;
        clienteTelefone: string;
        clienteEmail: string;
        userId: string | null;
        status: import("../../generated/prisma/enums").BookingStatus;
    }>;
}
