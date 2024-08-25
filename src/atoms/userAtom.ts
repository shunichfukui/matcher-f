import { atom } from 'recoil';
import { User } from '../app/types';

export const userState = atom<User | null>({
  key: 'userState',
  default: null,
});
