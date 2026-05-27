"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlotsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let SlotsService = class SlotsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll(query) {
        return this.prisma.slot.findMany({
            where: {
                businessId: query.businessId,
                disponivel: query.disponivel,
            },
            orderBy: { inicio: 'asc' },
        });
    }
    async generate(dto) {
        const start = new Date(dto.inicio);
        const end = new Date(dto.fim);
        const durMs = dto.duracaoMin * 60_000;
        if (start.getTime() >= end.getTime()) {
            throw new common_1.BadRequestException('"inicio" deve ser anterior a "fim".');
        }
        const data = [];
        let cursor = start.getTime();
        while (cursor + durMs <= end.getTime()) {
            const slotEnd = cursor + durMs;
            data.push({
                businessId: dto.businessId,
                inicio: new Date(cursor),
                fim: new Date(slotEnd),
            });
            cursor = slotEnd;
        }
        if (data.length === 0) {
            throw new common_1.BadRequestException('O intervalo é menor que a duração do slot.');
        }
        await this.prisma.slot.createMany({ data });
        return { criados: data.length };
    }
};
exports.SlotsService = SlotsService;
exports.SlotsService = SlotsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SlotsService);
//# sourceMappingURL=slots.service.js.map