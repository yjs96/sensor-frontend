import axiosInstance from './instance';

export const login = async (email: string, password: string) => {
  console.log(email, password);
  const response = await axiosInstance.post(`/auth/login`, {
    email: email,
    password: password,
  });
  const token = response.data.token;
  localStorage.setItem('token', token);
};

export const signup = async (email: string, password: string, name: string) => {
  console.log(email, password, name);
  const response = await axiosInstance.post(`/auth/signup`, {
    email: email,
    password: password,
    name: name,
  });
  console.log(response);
};
