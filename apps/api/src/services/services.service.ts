import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateServiceDto } from './dto/create-service.dto';

@Injectable()
export class ServicesService {
  constructor(private prisma: PrismaService) {}

  findAll(businessId?: string) {
    return this.prisma.service.findMany({
      where: businessId ? { businessId } : undefined,
      orderBy: { createdAt: 'asc' },
    });
  }

  create(dto: CreateServiceDto) {
    return this.prisma.service.create({
      data: {
        businessId: dto.businessId,
        nome: dto.nome,
        duracaoMin: dto.duracaoMin,
        preco: dto.preco,
      },
    });
  }

  async remove(id: string) {
    const existing = await this.prisma.service.findUnique({ where: { id } });
    if (!existing) {
      throw new NotFoundException('Serviço não encontrado');
    }
    await this.prisma.service.delete({ where: { id } });
    return { id };
  }
}
