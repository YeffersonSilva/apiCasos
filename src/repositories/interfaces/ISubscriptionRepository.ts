import { Subscription, CreateSubscriptionDTO, UpdateSubscriptionDTO } from '../../entities/Subscription';

export interface ISubscriptionRepository {
  /**
   * Obtiene todas las suscripciones de un usuario
   * @param userId ID del usuario
   * @returns Promise con el array de suscripciones encontradas
   */
  findByUserId(userId: string): Promise<Subscription[]>;

  /**
   * Busca una suscripción por su ID
   * @param id ID de la suscripción a buscar
   * @returns Promise con la suscripción encontrada o null
   */
  findById(id: string): Promise<Subscription | null>;

  /**
   * Crea una nueva suscripción
   * @param data Datos de la suscripción a crear
   * @returns Promise con la suscripción creada
   */
  create(data: CreateSubscriptionDTO): Promise<Subscription>;

  /**
   * Actualiza una suscripción existente
   * @param id ID de la suscripción a actualizar
   * @param data Datos a actualizar
   * @returns Promise con la suscripción actualizada
   */
  update(id: string, data: UpdateSubscriptionDTO): Promise<Subscription>;

  /**
   * Elimina una suscripción
   * @param id ID de la suscripción a eliminar
   * @returns Promise vacío
   */
  delete(id: string): Promise<void>;
} 