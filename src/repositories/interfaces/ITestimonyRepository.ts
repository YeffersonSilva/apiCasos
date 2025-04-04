import {
  Testimony,
  CreateTestimonyDTO,
  UpdateTestimonyDTO,
} from "../../entities/Testimony";

export interface ITestimonyRepository {
  /**
   * Obtiene todos los testimonios de un caso
   * @param caseId ID del caso
   * @returns Promise con el array de testimonios encontrados
   */
  findByCaseId(caseId: string): Promise<Testimony[]>;

  /**
   * Busca un testimonio por su ID
   * @param id ID del testimonio a buscar
   * @returns Promise con el testimonio encontrado o null
   */
  findById(id: string): Promise<Testimony | null>;

  /**
   * Crea un nuevo testimonio
   * @param data Datos del testimonio a crear
   * @returns Promise con el testimonio creado
   */
  create(data: CreateTestimonyDTO): Promise<Testimony>;

  /**
   * Actualiza un testimonio existente
   * @param id ID del testimonio a actualizar
   * @param data Datos a actualizar
   * @returns Promise con el testimonio actualizado
   */
  update(id: string, data: UpdateTestimonyDTO): Promise<Testimony>;

  /**
   * Elimina un testimonio
   * @param id ID del testimonio a eliminar
   * @returns Promise vacío
   */
  delete(id: string): Promise<void>;
}
