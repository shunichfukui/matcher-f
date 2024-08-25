import apiClient from './client';
import { User } from '../../types';

export const fetchUser = async (): Promise<User | null> => {
  try {
    const res = await apiClient.get('/current_user');
    return res.data.user;
  } catch (error) {
    console.error('ユーザー取得時にエラーが発生しました', error);
    return null;
  }
};
