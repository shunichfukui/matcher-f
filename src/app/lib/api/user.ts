import { User } from '../../types';
import apiClient from './client';

export const fetchUser = async () => {
  try {
    const user: User = await apiClient.post('/users');
    return user;
  } catch {
    console.error('ユーザー取得時にエラーが発生しました');
  }
};
