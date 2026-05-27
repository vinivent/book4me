import type { UserRole } from '../../generated/prisma/client';
export type AuthUser = {
    id: string;
    nome: string;
    email: string;
    telefone: string;
    role: UserRole;
};
