import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import type { AuthUser } from './types';
export declare class AuthController {
    private auth;
    constructor(auth: AuthService);
    register(dto: RegisterDto): Promise<{
        user: AuthUser;
        token: string;
    }>;
    login(dto: LoginDto): Promise<{
        user: AuthUser;
        token: string;
    }>;
    me(user: AuthUser): AuthUser;
}
