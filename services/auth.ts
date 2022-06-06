import axios from 'axios';
import { baseURL } from '../assets/config';

const authService = {
  async login({ email, password }: { email: string; password: string }) {
    const { data } = await axios.post(`${baseURL}/login`, {
      email,
      password
    });
    return data;
  },
  async register({
    email,
    password,
    firstName,
    secondName,
    phone,
    address
  }: {
    email: string;
    password: string;
    firstName: string;
    secondName: string;
    phone: string;
    address: string;
  }) {
    const { data } = await axios.post(`${baseURL}/register`, {
      email,
      password,
      firstName,
      secondName,
      phone,
      address
    });
    return data;
  }
};

export default authService;
