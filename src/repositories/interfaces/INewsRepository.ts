import { News, CreateNewsDTO, UpdateNewsDTO } from "../../entities/News";

export interface INewsRepository {
  /**
   * Obtiene todas las noticias, opcionalmente filtradas por caso
   * @param caseId ID del caso (opcional)
   * @returns Promise con el array de noticias encontradas
   */
  findAll(caseId?: string): Promise<News[]>;

  /**
   * Busca una noticia por su ID
   * @param id ID de la noticia a buscar
   * @returns Promise con la noticia encontrada o null
   */
  findById(id: string): Promise<News | null>;

  /**
   * Crea una nueva noticia
   * @param data Datos de la noticia a crear
   * @returns Promise con la noticia creada
   */
  create(data: CreateNewsDTO): Promise<News>;

  /**
   * Actualiza una noticia existente
   * @param id ID de la noticia a actualizar
   * @param data Datos a actualizar
   * @returns Promise con la noticia actualizada
   */
  update(id: string, data: UpdateNewsDTO): Promise<News>;

  /**
   * Elimina una noticia
   * @param id ID de la noticia a eliminar
   * @returns Promise vacío
   */
  delete(id: string): Promise<void>;
}
