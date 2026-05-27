import { BusinessesService } from './businesses.service';
export declare class BusinessesController {
    private businesses;
    constructor(businesses: BusinessesService);
    findAll(): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        nome: string;
        createdAt: Date;
        tipo: string;
        ownerId: string;
    }[]>;
}
