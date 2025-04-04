export class News {
  constructor(
    public id: string,
    public title: string,
    public source: string,
    public date: Date = new Date(),
    public excerpt: string,
    public content: string,
    public caseId?: string,
    public pdfUrl?: string,
    public imageUrl?: string,
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date()
  ) {}
}

export class CreateNewsDTO {
  constructor(
    public title: string,
    public source: string,
    public excerpt: string,
    public content: string,
    public caseId?: string,
    public date: Date = new Date(),
    public pdfUrl?: string,
    public imageUrl?: string
  ) {}
}

export class UpdateNewsDTO {
  constructor(
    public title?: string,
    public source?: string,
    public date?: Date,
    public excerpt?: string,
    public content?: string,
    public caseId?: string,
    public pdfUrl?: string,
    public imageUrl?: string
  ) {}
}
