import { User } from './entity';

export const userProviders = [
  {
    provide: 'USER_REPOSITORY',
    useValue: User,
  },
];
