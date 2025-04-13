import { Request, Response } from "express";
import { UserService } from "../services/UserService";
import { CreateUserDTO, UpdateUserDTO } from "../dtos/UserDTO";

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async findAll(req: Request, res: Response): Promise<Response> {
    try {
      const users = await this.userService.findAll();
      return res.json(users);
    } catch (error) {
      return res.status(500).json({ error: "Error al obtener usuarios" });
    }
  }

  async findById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const user = await this.userService.findById(id);
      if (!user) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }
      return res.json(user);
    } catch (error) {
      return res.status(500).json({ error: "Error al obtener usuario" });
    }
  }

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const userData: CreateUserDTO = req.body;
      const user = await this.userService.create(userData);
      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json({ error: "Error al crear usuario" });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const userData: UpdateUserDTO = req.body;
      const user = await this.userService.update(id, userData);
      if (!user) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }
      return res.json(user);
    } catch (error) {
      return res.status(500).json({ error: "Error al actualizar usuario" });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      await this.userService.delete(id);
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: "Error al eliminar usuario" });
    }
  }
}
