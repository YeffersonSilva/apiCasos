import { User, CreateUserDTO, UpdateUserDTO } from "../../entities/User";

export interface IUserRepository {
  /**
   * Busca un usuario por su email
   * @param email Email del usuario a buscar
   * @returns Promise con el usuario encontrado o null
   */
  findByEmail(email: string): Promise<User | null>;

  /**
   * Busca un usuario por su ID
   * @param id ID del usuario a buscar
   * @returns Promise con el usuario encontrado o null
   */
  findById(id: string): Promise<User | null>;

  /**
   * Crea un nuevo usuario
   * @param data Datos del usuario a crear
   * @returns Promise con el usuario creado
   */
  create(data: CreateUserDTO): Promise<User>;

  /**
   * Actualiza un usuario existente
   * @param id ID del usuario a actualizar
   * @param data Datos a actualizar
   * @returns Promise con el usuario actualizado
   */
  update(id: string, data: UpdateUserDTO): Promise<User>;

  /**
   * Elimina un usuario
   * @param id ID del usuario a eliminar
   * @returns Promise vacío
   */
  delete(id: string): Promise<void>;
}
