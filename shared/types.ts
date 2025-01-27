interface UserWithPassword {
  id: string;
  email: string;
  password: string;
  roles: string[];
}

export type User = Omit<UserWithPassword, "password">;