import { EvidenceType } from "@prisma/client";

export class Evidence {
  constructor(
    public id: string,
    public caseId: string,
    public type: EvidenceType,
    public title: string,
    public description?: string,
    public url?: string,
    public content?: string,
    public thumbnail?: string,
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date()
  ) {}
}

export class CreateEvidenceDTO {
  constructor(
    public caseId: string,
    public type: EvidenceType,
    public title: string,
    public description?: string,
    public url?: string,
    public content?: string,
    public thumbnail?: string
  ) {}
}

export class UpdateEvidenceDTO {
  constructor(
    public type?: EvidenceType,
    public title?: string,
    public description?: string,
    public url?: string,
    public content?: string,
    public thumbnail?: string
  ) {}
}
