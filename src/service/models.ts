export interface CreateUserDto {
  user: {
    username: string;
    email: string;
    password: string;
  };
}
