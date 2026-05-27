import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BusinessesService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.business.findMany({
      orderBy: { createdAt: 'asc' },
    });
  }
}
