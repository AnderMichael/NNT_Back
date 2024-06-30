import { Request, Response } from "express";
import UserService from "../services/userService";
import { IUser } from "../models/user";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserService.getAllUsers();
    res.json(users);
  } catch (error) {
    console.log("🚀 ~ getUsers ~ error:", error);
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
  try {
    const {
      name,
      email,
      password,
      description,
      username,
      goals,
      fav_events,
      last_events,
      missions
    } = req.body;
    const newUser: IUser = {
      name,
      email,
      password,
      description,
      username,
      goals,
      fav_events,
      last_events,
      missions
    };
    const createdUser = await UserService.createUser(newUser);
    res.status(201).json(createdUser);
  } catch (error) {
    console.log("🚀 ~ createUser ~ error:", error);
    res.status(500).json({ error: "Error al crear el usuario" });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const updatedUser = await UserService.updateUser(req.params.id, req.body);
    if (!updatedUser) {
      res.status(404).json({ error: "Usuario no encontrado" });
    } else {
      res.json(updatedUser);
    }
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el usuario" });
  }
};

export const getRanking = async (req: Request, res: Response): Promise<void> => {
  try {
    const ranking = await UserService.getRanking();
    res.json(ranking);
  } catch (error) {
    res.status(500).json({ message: 'Hubo un error al obtener el ranking de los usuarios'});
  }
}