import { PrismaService } from '../prisma/prisma.service';
import { CreateServiceDto } from './dto/create-service.dto';
export declare class ServicesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(businessId?: string): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        nome: string;
        createdAt: Date;
        businessId: string;
        duracaoMin: number;
        preco: import("@prisma/client-runtime-utils").Decimal;
    }[]>;
    create(dto: CreateServiceDto): import("../../generated/prisma/models").Prisma__ServiceClient<{
        id: string;
        nome: string;
        createdAt: Date;
        businessId: string;
        duracaoMin: number;
        preco: import("@prisma/client-runtime-utils").Decimal;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig | undefined;
    }>;
    remove(id: string): Promise<{
        id: string;
    }>;
}
