import { CaseRepository } from "../../../repositories/implementations/CaseRepository";
import { CreateCaseDTO, UpdateCaseDTO, CaseResponseDTO } from "../dtos/CaseDTO";
import { CaseStatus } from "@prisma/client";

export class CaseService {
  private caseRepository: CaseRepository;

  constructor() {
    this.caseRepository = new CaseRepository();
  }

  async findAll(): Promise<CaseResponseDTO[]> {
    const cases = await this.caseRepository.findAll();
    return cases.map((caseData) => new CaseResponseDTO(caseData));
  }

  async findById(id: string): Promise<CaseResponseDTO | null> {
    const caseData = await this.caseRepository.findById(id);
    return caseData ? new CaseResponseDTO(caseData) : null;
  }

  async create(data: CreateCaseDTO): Promise<CaseResponseDTO> {
    const caseData = await this.caseRepository.create({
      ...data,
      status: CaseStatus.OPEN,
    });
    return new CaseResponseDTO(caseData);
  }

  async update(id: string, data: UpdateCaseDTO): Promise<CaseResponseDTO> {
    const caseData = await this.caseRepository.update(id, data);
    return new CaseResponseDTO(caseData);
  }

  async delete(id: string): Promise<void> {
    await this.caseRepository.delete(id);
  }
}
