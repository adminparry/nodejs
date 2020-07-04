import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { passwordWrap } from 'src/common/utils/crypto';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) { }

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(username);
        //  会加载到req对象中去了req.user

        // @ts-ignore
        if (user && user.password === passwordWrap(pass, user.salt)) {
            // @ts-ignore
            const { password,salt, ...result } = user.toJSON();

            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { user: user };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}