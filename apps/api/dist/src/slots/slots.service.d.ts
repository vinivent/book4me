import { PrismaService } from '../prisma/prisma.service';
import { GenerateSlotsDto } from './dto/generate-slots.dto';
import { ListSlotsQueryDto } from './dto/list-slots.query.dto';
export declare class SlotsService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(query: ListSlotsQueryDto): import("../../generated/prisma/internal/prismaNamespace").PrismaPromise<{
        id: string;
        createdAt: Date;
        businessId: string;
        inicio: Date;
        fim: Date;
        disponivel: boolean;
    }[]>;
    generate(dto: GenerateSlotsDto): Promise<{
        criados: number;
    }>;
}
