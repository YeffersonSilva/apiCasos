import prisma from "../../config/dbConfig";
import { ICaseRepository, CaseFilter } from "../interfaces/ICaseRepository";
import { Case, CreateCaseDTO, UpdateCaseDTO } from "../../entities/Case";
import { CaseDifficulty, CaseStatus } from "@prisma/client";

export class CaseRepository implements ICaseRepository {
  async findAll(filter?: CaseFilter): Promise<Case[]> {
    const cases = await prisma.case.findMany({
      where: {
        difficulty: filter?.difficulty,
        status: filter?.status,
        category: filter?.category,
        creatorId: filter?.creatorId,
        investigatorId: filter?.investigatorId,
      },
      include: {
        creator: true,
        investigator: true,
        evidences: true,
        reports: true,
        testimonies: true,
      },
    });
    return cases;
  }

  async findById(id: string): Promise<Case | null> {
    const case_ = await prisma.case.findUnique({
      where: { id },
      include: {
        creator: true,
        investigator: true,
        evidences: true,
        reports: true,
        testimonies: true,
      },
    });
    return case_;
  }

  async create(data: CreateCaseDTO): Promise<Case> {
    const case_ = await prisma.case.create({
      data: {
        ...data,
        status: CaseStatus.OPEN,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      include: {
        creator: true,
        investigator: true,
        evidences: true,
        reports: true,
        testimonies: true,
      },
    });
    return case_;
  }

  async update(id: string, data: UpdateCaseDTO): Promise<Case> {
    const case_ = await prisma.case.update({
      where: { id },
      data: {
        ...data,
        updatedAt: new Date(),
      },
      include: {
        creator: true,
        investigator: true,
        evidences: true,
        reports: true,
        testimonies: true,
      },
    });
    return case_;
  }

  async delete(id: string): Promise<void> {
    await prisma.case.delete({
      where: { id },
    });
  }
}
