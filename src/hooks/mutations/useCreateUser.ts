import { useMutation, useQuery } from '@tanstack/vue-query';
import api from '@/service/api';
import type { CreateUserDto } from '@/service/models';

const useCreateUser = () => {
  return useMutation((user: CreateUserDto) => api.post('/users', user));
};

export default useCreateUser;
