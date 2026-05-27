import { GenerateSlotsDto } from './dto/generate-slots.dto';
import { ListSlotsQueryDto } from './dto/list-slots.query.dto';
import { SlotsService } from './slots.service';
export declare class SlotsController {
    private slots;
    constructor(slots: SlotsService);
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
