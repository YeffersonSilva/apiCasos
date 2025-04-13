import { Request, Response } from "express";
import { CaseService } from "../services/CaseService";
import { CreateCaseDTO, UpdateCaseDTO } from "../dtos/CaseDTO";

export class CaseController {
  private caseService: CaseService;

  constructor() {
    this.caseService = new CaseService();
  }

  async findAll(req: Request, res: Response): Promise<Response> {
    try {
      const cases = await this.caseService.findAll();
      return res.json(cases);
    } catch (error) {
      return res.status(500).json({ error: "Error al obtener casos" });
    }
  }

  async findById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const caseData = await this.caseService.findById(id);
      if (!caseData) {
        return res.status(404).json({ error: "Caso no encontrado" });
      }
      return res.json(caseData);
    } catch (error) {
      return res.status(500).json({ error: "Error al obtener caso" });
    }
  }

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const caseData: CreateCaseDTO = req.body;
      const newCase = await this.caseService.create(caseData);
      return res.status(201).json(newCase);
    } catch (error) {
      return res.status(500).json({ error: "Error al crear caso" });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const caseData: UpdateCaseDTO = req.body;
      const updatedCase = await this.caseService.update(id, caseData);
      if (!updatedCase) {
        return res.status(404).json({ error: "Caso no encontrado" });
      }
      return res.json(updatedCase);
    } catch (error) {
      return res.status(500).json({ error: "Error al actualizar caso" });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      await this.caseService.delete(id);
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: "Error al eliminar caso" });
    }
  }
}
