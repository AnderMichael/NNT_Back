import { Request, Response } from "express";
import UserService from "../services/userService";
import { IUser } from "../models/user";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserService.getAllUsers();
    res.json(users);
  } catch (error) {
    console.log("🚀 ~ getUsers ~ error:", error)
    res.status(500).json({ error: "Error al obtener los usuarios" });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await UserService.getUserById(req.params.id);
    if (!user) {
      res.status(404).json({ error: "Usuario no encontrado" });
    } else {
      res.json(user);
    }
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el usuario" });
  }
};

export const createUser = async (req: Request, res: Response) => {
  console.log("🚀 ~ createUser ~ req:", req.body)
  try {
    const { name, email, password } = req.body;
    const newUser: IUser = { name, email, password };
    const createdUser = await UserService.createUser(newUser);
    res.status(201).json(createdUser);
  } catch (error) {
    console.log("🚀 ~ createUser ~ error:", error)
    res.status(500).json({ error: "Error al crear el usuario" });
  }
};
