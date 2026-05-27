import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import * as bcrypt from 'bcryptjs';
import { PrismaClient } from '../generated/prisma/client';

async function main() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error('DATABASE_URL não definida');
  }

  const prisma = new PrismaClient({
    adapter: new PrismaPg({ connectionString }),
  });

  console.log('Limpando dados antigos...');
  await prisma.booking.deleteMany();
  await prisma.slot.deleteMany();
  await prisma.service.deleteMany();
  await prisma.business.deleteMany();
  await prisma.user.deleteMany();

  console.log('Criando usuários...');
  const [donoHash, clienteHash] = await Promise.all([
    bcrypt.hash('dono123', 10),
    bcrypt.hash('cliente123', 10),
  ]);
  const dono = await prisma.user.create({
    data: {
      nome: 'Vinicius',
      email: 'dono@book4me.dev',
      telefone: '11999990000',
      passwordHash: donoHash,
      role: 'DONO',
    },
  });
  await prisma.user.create({
    data: {
      nome: 'João Cliente',
      email: 'cliente@book4me.dev',
      telefone: '11988887777',
      passwordHash: clienteHash,
      role: 'CLIENTE',
    },
  });

  console.log('Criando negócio...');
  const business = await prisma.business.create({
    data: {
      nome: 'Lâmina',
      tipo: 'barbearia',
      ownerId: dono.id,
    },
  });

  console.log('Criando serviços...');
  await prisma.service.createMany({
    data: [
      { businessId: business.id, nome: 'Corte', duracaoMin: 30, preco: 40 },
      { businessId: business.id, nome: 'Barba', duracaoMin: 20, preco: 25 },
    ],
  });

  console.log('Criando slots...');
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);

  const dayAfter = new Date(tomorrow);
  dayAfter.setDate(tomorrow.getDate() + 1);

  const hours = [9, 10, 11];
  const slotData = [tomorrow, dayAfter].flatMap((day) =>
    hours.map((h) => {
      const inicio = new Date(day);
      inicio.setHours(h, 0, 0, 0);
      const fim = new Date(inicio);
      fim.setMinutes(30);
      return { businessId: business.id, inicio, fim };
    }),
  );

  await prisma.slot.createMany({ data: slotData });

  console.log(
    `Seed concluído: 2 usuários, 1 negócio, 2 serviços, ${slotData.length} slots.`,
  );
  console.log('Login dono:    dono@book4me.dev / dono123');
  console.log('Login cliente: cliente@book4me.dev / cliente123');
  await prisma.$disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
