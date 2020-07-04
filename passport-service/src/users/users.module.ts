import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { userProvider } from 'src/entity/user.entity';

@Module({
  providers: [UsersService,userProvider],
  exports: [UsersService]
})
export class UsersModule {}
