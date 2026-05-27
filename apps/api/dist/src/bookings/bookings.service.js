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
exports.BookingsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let BookingsService = class BookingsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll(user) {
        return this.prisma.booking.findMany({
            where: user.role === 'DONO' ? undefined : { userId: user.id },
            include: { service: true, slot: true },
            orderBy: { createdAt: 'desc' },
        });
    }
    async create(dto, user) {
        return this.prisma.$transaction(async (tx) => {
            const rows = await tx.$queryRaw `
        SELECT id, disponivel FROM slots WHERE id = ${dto.slotId} FOR UPDATE
      `;
            const slot = rows[0];
            if (!slot) {
                throw new common_1.NotFoundException('Horário não encontrado.');
            }
            if (!slot.disponivel) {
                throw new common_1.ConflictException('Esse horário acabou de ser reservado por outro cliente.');
            }
            const booking = await tx.booking.create({
                data: {
                    slotId: dto.slotId,
                    serviceId: dto.serviceId,
                    userId: user?.id ?? null,
                    clienteNome: dto.clienteNome,
                    clienteTelefone: dto.clienteTelefone,
                    clienteEmail: dto.clienteEmail,
                },
                include: { service: true, slot: true },
            });
            await tx.slot.update({
                where: { id: dto.slotId },
                data: { disponivel: false },
            });
            return booking;
        });
    }
    async cancel(id, user) {
        return this.prisma.$transaction(async (tx) => {
            const booking = await tx.booking.findUnique({ where: { id } });
            if (!booking) {
                throw new common_1.NotFoundException('Reserva não encontrada.');
            }
            if (user.role !== 'DONO' && booking.userId !== user.id) {
                throw new common_1.ForbiddenException('Você só pode cancelar suas próprias reservas.');
            }
            if (booking.status === 'CANCELADO') {
                return booking;
            }
            const updated = await tx.booking.update({
                where: { id },
                data: { status: 'CANCELADO' },
                include: { service: true, slot: true },
            });
            await tx.slot.update({
                where: { id: booking.slotId },
                data: { disponivel: true },
            });
            return updated;
        });
    }
};
exports.BookingsService = BookingsService;
exports.BookingsService = BookingsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BookingsService);
//# sourceMappingURL=bookings.service.js.map