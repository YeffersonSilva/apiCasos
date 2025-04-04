import { ReportType } from "@prisma/client";

export class Report {
  constructor(
    public id: string,
    public caseId: string,
    public title: string,
    public date: Date = new Date(),
    public content: string,
    public type: ReportType,
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date()
  ) {}
}

export class CreateReportDTO {
  constructor(
    public caseId: string,
    public title: string,
    public content: string,
    public type: ReportType,
    public date: Date = new Date()
  ) {}
}

export class UpdateReportDTO {
  constructor(
    public title?: string,
    public date?: Date,
    public content?: string,
    public type?: ReportType
  ) {}
}
