import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { GenerateSlotsDto } from './dto/generate-slots.dto';
import { ListSlotsQueryDto } from './dto/list-slots.query.dto';

@Injectable()
export class SlotsService {
  constructor(private prisma: PrismaService) {}

  findAll(query: ListSlotsQueryDto) {
    return this.prisma.slot.findMany({
      where: {
        businessId: query.businessId,
        disponivel: query.disponivel,
      },
      orderBy: { inicio: 'asc' },
    });
  }

  async generate(dto: GenerateSlotsDto) {
    const start = new Date(dto.inicio);
    const end = new Date(dto.fim);
    const durMs = dto.duracaoMin * 60_000;

    if (start.getTime() >= end.getTime()) {
      throw new BadRequestException('"inicio" deve ser anterior a "fim".');
    }

    const data: Array<{ businessId: string; inicio: Date; fim: Date }> = [];
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
      throw new BadRequestException(
        'O intervalo é menor que a duração do slot.',
      );
    }

    await this.prisma.slot.createMany({ data });
    return { criados: data.length };
  }
}
