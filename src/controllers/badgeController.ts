import { Request, Response } from "express";
import BadgeService from "../services/badgeService";
import { IBadge } from "../models/badge";

export const getBadges = async (req: Request, res: Response) => {
  try{
    const badges = await BadgeService.getAllBadges();
    res.json(badges);
  }catch(error){
    console.log("🚀 ~ getBadges ~ error:", error);
    res.status(500).json({ error: "Error al obtener las insignias" });
  }

};

export const getBadgeById = async (req: Request, res: Response) => {
  try {
    const badge = await BadgeService.getBadgeById(req.params.id);
    if (!badge) {
      res.status(404).json({ error: "Insignia no encontrada" });
    } else {
      res.json(badge);
    }
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la insignia" });
  }
};

export const createBadge = async (req: Request, res: Response) => {
  console.log("🚀 ~ createBadge ~ req:", req.body)
  try {
    const { name, image } = req.body;
    const newBadge: IBadge = { name, image };
    const createdBadge = await BadgeService.createBadge(newBadge);
    res.status(201).json(createdBadge);
  } catch (error) {
    console.log("🚀 ~ createBadge ~ error:", error)
    res.status(500).json({ error: "Error al crear la insignia" });
  }
};