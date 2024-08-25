import { atom } from 'recoil';
import { User } from '../app/types';

export const userState = atom<User>({
  key: 'userState',
  default: {
    email: '',
    password: '',
    name: '',
  },
});
