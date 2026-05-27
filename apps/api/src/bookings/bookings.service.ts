import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { AuthUser } from '../auth/types';
import { CreateBookingDto } from './dto/create-booking.dto';

type SlotLockRow = { id: string; disponivel: boolean };

@Injectable()
export class BookingsService {
  constructor(private prisma: PrismaService) {}

  findAll(user: AuthUser) {
    return this.prisma.booking.findMany({
      where: user.role === 'DONO' ? undefined : { userId: user.id },
      include: { service: true, slot: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async create(dto: CreateBookingDto, user?: AuthUser) {
    return this.prisma.$transaction(async (tx) => {
      const rows = await tx.$queryRaw<SlotLockRow[]>`
        SELECT id, disponivel FROM slots WHERE id = ${dto.slotId} FOR UPDATE
      `;
      const slot = rows[0];

      if (!slot) {
        throw new NotFoundException('Horário não encontrado.');
      }
      if (!slot.disponivel) {
        throw new ConflictException(
          'Esse horário acabou de ser reservado por outro cliente.',
        );
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

  async cancel(id: string, user: AuthUser) {
    return this.prisma.$transaction(async (tx) => {
      const booking = await tx.booking.findUnique({ where: { id } });
      if (!booking) {
        throw new NotFoundException('Reserva não encontrada.');
      }
      if (user.role !== 'DONO' && booking.userId !== user.id) {
        throw new ForbiddenException(
          'Você só pode cancelar suas próprias reservas.',
        );
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
}
