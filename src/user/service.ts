import { Injectable, Inject } from '@nestjs/common';

import { User } from './entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: typeof User,
  ) {}

  create(user: User): Promise<User> {
    return this.userRepository.create<User>(user);
  }

  findAll() {
    return this.userRepository.findAll<User>();
  }

  findOne(id: number) {
    return this.userRepository.findOne<User>({
      where: { id: id },
    });
  }

  update(id: number, user: User) {
    return this.userRepository.update<User>(user, {
      where: { id: id },
    });
  }

  remove(id: number) {
    return this.userRepository.destroy<User>({
      where: { id: id },
    });
  }
}
