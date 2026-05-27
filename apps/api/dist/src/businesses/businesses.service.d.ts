import { PrismaService } from '../prisma/prisma.service';
export declare class BusinessesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        nome: string;
        createdAt: Date;
        tipo: string;
        ownerId: string;
    }[]>;
}
