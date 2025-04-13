import prisma from "../../config/dbConfig";
import { IUserRepository } from "../interfaces/IUserRepository";
import { User, CreateUserDTO, UpdateUserDTO } from "../../entities/User";
import { UserRole } from "@prisma/client";

export class UserRepository implements IUserRepository {
  async findAll(): Promise<User[]> {
    const users = await prisma.user.findMany({
      include: {
        cases: true,
        investigations: true,
        testimonies: true,
        reports: true,
      },
    });
    return users;
  }

  async findById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { id },
      include: {
        cases: true,
        investigations: true,
        testimonies: true,
        reports: true,
      },
    });
    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { email },
      include: {
        cases: true,
        investigations: true,
        testimonies: true,
        reports: true,
      },
    });
    return user;
  }

  async create(data: CreateUserDTO): Promise<User> {
    const user = await prisma.user.create({
      data: {
        ...data,
        role: UserRole.USER,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      include: {
        cases: true,
        investigations: true,
        testimonies: true,
        reports: true,
      },
    });
    return user;
  }

  async update(id: string, data: UpdateUserDTO): Promise<User> {
    const user = await prisma.user.update({
      where: { id },
      data: {
        ...data,
        updatedAt: new Date(),
      },
      include: {
        cases: true,
        investigations: true,
        testimonies: true,
        reports: true,
      },
    });
    return user;
  }

  async delete(id: string): Promise<void> {
    await prisma.user.delete({
      where: { id },
    });
  }
}
