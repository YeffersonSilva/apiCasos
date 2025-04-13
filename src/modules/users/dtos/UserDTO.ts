import { UserRole } from "@prisma/client";

export class CreateUserDTO {
  name: string;
  email: string;
  password: string;
  role?: UserRole;
}

export class UpdateUserDTO {
  name?: string;
  email?: string;
  password?: string;
  role?: UserRole;
}

export class UserResponseDTO {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;

  constructor(user: any) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.role = user.role;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
  }
}
