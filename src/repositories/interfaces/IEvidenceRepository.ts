import {
  Evidence,
  CreateEvidenceDTO,
  UpdateEvidenceDTO,
} from "../../entities/Evidence";

export interface IEvidenceRepository {
  /**
   * Obtiene todas las evidencias de un caso
   * @param caseId ID del caso
   * @returns Promise con el array de evidencias encontradas
   */
  findByCaseId(caseId: string): Promise<Evidence[]>;

  /**
   * Busca una evidencia por su ID
   * @param id ID de la evidencia a buscar
   * @returns Promise con la evidencia encontrada o null
   */
  findById(id: string): Promise<Evidence | null>;

  /**
   * Crea una nueva evidencia
   * @param data Datos de la evidencia a crear
   * @returns Promise con la evidencia creada
   */
  create(data: CreateEvidenceDTO): Promise<Evidence>;

  /**
   * Actualiza una evidencia existente
   * @param id ID de la evidencia a actualizar
   * @param data Datos a actualizar
   * @returns Promise con la evidencia actualizada
   */
  update(id: string, data: UpdateEvidenceDTO): Promise<Evidence>;

  /**
   * Elimina una evidencia
   * @param id ID de la evidencia a eliminar
   * @returns Promise vacío
   */
  delete(id: string): Promise<void>;
}
