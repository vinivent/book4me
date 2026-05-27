import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import type { AuthUser } from './types';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  async register(dto: RegisterDto): Promise<{ user: AuthUser; token: string }> {
    const existing = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (existing) {
      throw new ConflictException('Email já cadastrado');
    }

    const passwordHash = await bcrypt.hash(dto.password, 10);
    const user = await this.prisma.user.create({
      data: {
        nome: dto.nome,
        email: dto.email,
        telefone: dto.telefone,
        passwordHash,
        role: 'CLIENTE',
      },
      select: {
        id: true,
        nome: true,
        email: true,
        telefone: true,
        role: true,
      },
    });

    return { user, token: this.signToken(user.id) };
  }

  async login(dto: LoginDto): Promise<{ user: AuthUser; token: string }> {
    const found = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });
    if (!found) {
      throw new UnauthorizedException('Credenciais inválidas');
    }
    const ok = await bcrypt.compare(dto.password, found.passwordHash);
    if (!ok) {
      throw new UnauthorizedException('Credenciais inválidas');
    }
    const user: AuthUser = {
      id: found.id,
      nome: found.nome,
      email: found.email,
      telefone: found.telefone,
      role: found.role,
    };
    return { user, token: this.signToken(user.id) };
  }

  private signToken(userId: string): string {
    return this.jwt.sign({ sub: userId });
  }
}
