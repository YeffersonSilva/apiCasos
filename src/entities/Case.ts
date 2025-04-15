import { CaseDifficulty, CaseStatus } from "@prisma/client";
import { User } from "./User";
import { Evidence } from "./Evidence";
import { Report } from "./Report";
import { Testimony } from "./Testimony";

/**
 * Entidad que representa un caso de investigación
 * @class Case
 */
export class Case {
  /**
   * Identificador único del caso
   * @type {string}
   */
  id: string;

  /**
   * Título del caso
   * @type {string}
   */
  title: string;

  /**
   * Descripción detallada del caso
   * @type {string}
   */
  description: string;

  /**
   * Estado actual del caso
   * @type {CaseStatus}
   */
  status: CaseStatus;

  /**
   * Dificultad del caso
   * @type {CaseDifficulty}
   */
  difficulty: CaseDifficulty;

  /**
   * Usuario que creó el caso
   * @type {User}
   */
  creator: User;

  /**
   * Identificador del usuario creador
   * @type {string}
   */
  creatorId: string;

  /**
   * Usuario asignado como investigador
   * @type {User | null}
   */
  investigator: User | null;

  /**
   * Identificador del usuario investigador
   * @type {string | null}
   */
  investigatorId: string | null;

  /**
   * Lista de evidencias asociadas al caso
   * @type {Evidence[]}
   */
  evidences: Evidence[];

  /**
   * Lista de reportes asociados al caso
   * @type {Report[]}
   */
  reports: Report[];

  /**
   * Lista de testimonios asociados al caso
   * @type {Testimony[]}
   */
  testimonies: Testimony[];

  /**
   * Fecha de creación del caso
   * @type {Date}
   */
  createdAt: Date;

  /**
   * Fecha de última actualización del caso
   * @type {Date}
   */
  updatedAt: Date;

  constructor(
    public id: string,
    public title: string,
    public description: string,
    public difficulty: CaseDifficulty,
    public estimatedTime: string,
    public category: string,
    public creator: User,
    public creatorId: string,
    public mainImage?: string,
    public incidentDate: Date = new Date(),
    public status: CaseStatus = "OPEN",
    public views: number = 0,
    public completedCount: number = 0,
    public rating?: number,
    public investigator?: User,
    public investigatorId?: string,
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date()
  ) {}
}

export class CreateCaseDTO {
  constructor(
    public title: string,
    public description: string,
    public difficulty: CaseDifficulty,
    public estimatedTime: string,
    public category: string,
    public creatorId: string,
    public mainImage?: string,
    public incidentDate: Date = new Date(),
    public investigatorId?: string
  ) {}
}

export class UpdateCaseDTO {
  constructor(
    public title?: string,
    public description?: string,
    public mainImage?: string,
    public incidentDate?: Date,
    public difficulty?: CaseDifficulty,
    public estimatedTime?: string,
    public category?: string,
    public status?: CaseStatus,
    public investigatorId?: string
  ) {}
}
