import { CreateServiceDto } from './dto/create-service.dto';
import { ServicesService } from './services.service';
export declare class ServicesController {
    private services;
    constructor(services: ServicesService);
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
