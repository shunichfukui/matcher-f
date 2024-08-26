import apiClient from './client';

export async function login(email: string, password: string, nickname: string) {
  try {
    const res = await apiClient.post('/login', {
      email,
      password,
      nickname,
    });
    const data = res.data;
    localStorage.setItem('token', data.token);
    return data;
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      throw new Error('Invalid email or password');
    } else {
      throw new Error('An error occurred during login');
    }
  }
}

export async function register(
  email: string,
  password: string,
  nickname: string
) {
  try {
    const res = await apiClient.post('/register', {
      email,
      password,
      nickname,
    });
    const data = res.data;
    localStorage.setItem('token', data.token);
    return data;
  } catch (error: any) {
    if (error.response && error.response.status === 422) {
      throw new Error('Failed to create account');
    } else {
      throw new Error('An error occurred during registration');
    }
  }
}
