import { useMutation, useQuery } from '@tanstack/vue-query';
import api from '@/service/api';
import type { LoginUserDto } from '@/service/models';

const useLogin = () => {
  return useMutation((user: LoginUserDto) => api.post('/users/login', user));
};

export default useLogin;
