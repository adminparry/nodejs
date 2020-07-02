import { Controller, Get, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './auth.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private authService : AuthService
    ){}

    @Get()
    async auth(@Body() data: LoginDto){
        return await this.authService.login(data);
    }
}
