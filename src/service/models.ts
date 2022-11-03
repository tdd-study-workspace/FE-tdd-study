export interface CreateUserDto {
  user: {
    username: string;
    email: string;
    password: string;
  };
}

export interface CreateUserErrorResponseBody {
  errors: {
    email?: string[];
    username?: string[];
  };
}

export interface LoginUserDto {
  user: {
    email: string;
    password: string;
  }
}