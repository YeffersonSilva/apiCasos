import { Plan, CreatePlanDTO, UpdatePlanDTO } from "../../entities/Plan";

export interface IPlanRepository {
  /**
   * Obtiene todos los planes disponibles
   * @returns Promise con el array de planes encontrados
   */
  findAll(): Promise<Plan[]>;

  /**
   * Busca un plan por su ID
   * @param id ID del plan a buscar
   * @returns Promise con el plan encontrado o null
   */
  findById(id: string): Promise<Plan | null>;

  /**
   * Crea un nuevo plan
   * @param data Datos del plan a crear
   * @returns Promise con el plan creado
   */
  create(data: CreatePlanDTO): Promise<Plan>;

  /**
   * Actualiza un plan existente
   * @param id ID del plan a actualizar
   * @param data Datos a actualizar
   * @returns Promise con el plan actualizado
   */
  update(id: string, data: UpdatePlanDTO): Promise<Plan>;

  /**
   * Elimina un plan
   * @param id ID del plan a eliminar
   * @returns Promise vacío
   */
  delete(id: string): Promise<void>;
}
