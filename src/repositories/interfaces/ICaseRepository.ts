import { Case, CreateCaseDTO, UpdateCaseDTO } from "../../entities/Case";
import { CaseDifficulty, CaseStatus } from "@prisma/client";

export interface CaseFilter {
  difficulty?: CaseDifficulty;
  status?: CaseStatus;
  category?: string;
  creatorId?: string;
  investigatorId?: string;
}

export interface ICaseRepository {
  /**
   * Obtiene todos los casos, opcionalmente filtrados
   * @param filter Filtros opcionales para la búsqueda
   * @returns Promise con el array de casos encontrados
   */
  findAll(filter?: CaseFilter): Promise<Case[]>;

  /**
   * Busca un caso por su ID
   * @param id ID del caso a buscar
   * @returns Promise con el caso encontrado o null
   */
  findById(id: string): Promise<Case | null>;

  /**
   * Crea un nuevo caso
   * @param data Datos del caso a crear
   * @returns Promise con el caso creado
   */
  create(data: CreateCaseDTO): Promise<Case>;

  /**
   * Actualiza un caso existente
   * @param id ID del caso a actualizar
   * @param data Datos a actualizar
   * @returns Promise con el caso actualizado
   */
  update(id: string, data: UpdateCaseDTO): Promise<Case>;

  /**
   * Elimina un caso
   * @param id ID del caso a eliminar
   * @returns Promise vacío
   */
  delete(id: string): Promise<void>;
}
