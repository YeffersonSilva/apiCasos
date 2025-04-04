import { CaseDifficulty, CaseStatus } from "@prisma/client";
import { User } from "./User";

export class Case {
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
