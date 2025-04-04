import {
  Report,
  CreateReportDTO,
  UpdateReportDTO,
} from "../../entities/Report";

export interface IReportRepository {
  /**
   * Obtiene todos los reportes de un caso
   * @param caseId ID del caso
   * @returns Promise con el array de reportes encontrados
   */
  findByCaseId(caseId: string): Promise<Report[]>;

  /**
   * Busca un reporte por su ID
   * @param id ID del reporte a buscar
   * @returns Promise con el reporte encontrado o null
   */
  findById(id: string): Promise<Report | null>;

  /**
   * Crea un nuevo reporte
   * @param data Datos del reporte a crear
   * @returns Promise con el reporte creado
   */
  create(data: CreateReportDTO): Promise<Report>;

  /**
   * Actualiza un reporte existente
   * @param id ID del reporte a actualizar
   * @param data Datos a actualizar
   * @returns Promise con el reporte actualizado
   */
  update(id: string, data: UpdateReportDTO): Promise<Report>;

  /**
   * Elimina un reporte
   * @param id ID del reporte a eliminar
   * @returns Promise vacío
   */
  delete(id: string): Promise<void>;
}
