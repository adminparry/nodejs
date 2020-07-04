import { Injectable, Inject } from '@nestjs/common';
import { USER, User } from 'src/entity/user.entity';
import text from 'src/constants/text.constant';
import { passwordWrap } from 'src/common/utils/crypto';

@Injectable()
export class UsersService {

  constructor(
    @Inject(USER) private repository: typeof User,
  ) { }


  async findOne(name: string){

    return await this.repository.findOne({
      // attributes:{ exclude: ['password']},
      where: {
        name: name
      }
    })
  }
  async register(data: User) {
    const salt = Math.random().toString(36).substr(2);

    if(await this.findOne(data.name)){
      return {msg: text['user.ixest']}
    }
    const save = await this.repository.create({
      name: data.name,
      password: passwordWrap(data.password, salt),
      salt: salt
    });

    return {
      id: save.id,
      name: save.name
    }
  }
}
