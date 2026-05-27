"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const adapter_pg_1 = require("@prisma/adapter-pg");
const bcrypt = __importStar(require("bcryptjs"));
const client_1 = require("../generated/prisma/client");
async function main() {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
        throw new Error('DATABASE_URL não definida');
    }
    const prisma = new client_1.PrismaClient({
        adapter: new adapter_pg_1.PrismaPg({ connectionString }),
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
    const slotData = [tomorrow, dayAfter].flatMap((day) => hours.map((h) => {
        const inicio = new Date(day);
        inicio.setHours(h, 0, 0, 0);
        const fim = new Date(inicio);
        fim.setMinutes(30);
        return { businessId: business.id, inicio, fim };
    }));
    await prisma.slot.createMany({ data: slotData });
    console.log(`Seed concluído: 2 usuários, 1 negócio, 2 serviços, ${slotData.length} slots.`);
    console.log('Login dono:    dono@book4me.dev / dono123');
    console.log('Login cliente: cliente@book4me.dev / cliente123');
    await prisma.$disconnect();
}
main().catch((err) => {
    console.error(err);
    process.exit(1);
});
//# sourceMappingURL=seed.js.map