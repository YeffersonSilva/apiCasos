import { UserRepository } from "../../../repositories/implementations/UserRepository";
import { CreateUserDTO, UpdateUserDTO, UserResponseDTO } from "../dtos/UserDTO";
import bcrypt from "bcryptjs";

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async findAll(): Promise<UserResponseDTO[]> {
    const users = await this.userRepository.findAll();
    return users.map((user) => new UserResponseDTO(user));
  }

  async findById(id: string): Promise<UserResponseDTO | null> {
    const user = await this.userRepository.findById(id);
    return user ? new UserResponseDTO(user) : null;
  }

  async findByEmail(email: string): Promise<UserResponseDTO | null> {
    const user = await this.userRepository.findByEmail(email);
    return user ? new UserResponseDTO(user) : null;
  }

  async create(data: CreateUserDTO): Promise<UserResponseDTO> {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await this.userRepository.create({
      ...data,
      password: hashedPassword,
    });
    return new UserResponseDTO(user);
  }

  async update(id: string, data: UpdateUserDTO): Promise<UserResponseDTO> {
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }
    const user = await this.userRepository.update(id, data);
    return new UserResponseDTO(user);
  }

  async delete(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}
