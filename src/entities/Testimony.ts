export class Testimony {
  constructor(
    public id: string,
    public caseId: string,
    public witnessName: string,
    public role: string,
    public statement: string,
    public date: Date = new Date(),
    public audioUrl?: string,
    public videoUrl?: string,
    public transcript?: string,
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date()
  ) {}
}

export class CreateTestimonyDTO {
  constructor(
    public caseId: string,
    public witnessName: string,
    public role: string,
    public statement: string,
    public date: Date = new Date(),
    public audioUrl?: string,
    public videoUrl?: string,
    public transcript?: string
  ) {}
}

export class UpdateTestimonyDTO {
  constructor(
    public witnessName?: string,
    public role?: string,
    public statement?: string,
    public date?: Date,
    public audioUrl?: string,
    public videoUrl?: string,
    public transcript?: string
  ) {}
}
