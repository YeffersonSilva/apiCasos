import { UserRole } from "@prisma/client";
import { Subscription } from "./Subscription";

export class User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public password: string,
    public role: UserRole,
    public subscription?: Subscription,
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date()
  ) {}
}

export class CreateUserDTO {
  constructor(
    public name: string,
    public email: string,
    public password: string,
    public role?: UserRole
  ) {}
}

export class UpdateUserDTO {
  constructor(
    public name?: string,
    public email?: string,
    public password?: string,
    public role?: UserRole
  ) {}
}
