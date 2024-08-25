import axios from 'axios';

export async function login(email: string, password: string) {
  try {
    const res = await axios.post('/login', { email, password });
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

export async function register(email: string, password: string) {
  try {
    const res = await axios.post('/register', { email, password });
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
