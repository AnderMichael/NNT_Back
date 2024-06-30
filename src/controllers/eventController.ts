import { Request, Response } from "express";
import EventService from "../services/eventService";
import { IEvent } from "../models/event";

export const getEvents = async (req: Request, res: Response) => {
  try {
    const events = await EventService.getAllEvents();
    res.json(events);
  } catch (error) {
    console.log("🚀 ~ getEvents ~ error:", error);
    res.status(500).json({ error: "Error al obtener los eventos" });
  }

};

export const getEventById = async (req: Request, res: Response) => {
  try {
    const event = await EventService.getEventById(req.params.id);
    if (!event) {
      res.status(404).json({ error: "Event no encontrado" });
    } else {
      res.json(event);
    }
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el evento" });
  }
};

export const createEvent = async (req: Request, res: Response) => {
  console.log("🚀 ~ createEvent ~ req:", req.body)
  try {
    const { date, hour, direction, price, description, contact, sponsor, organizer, missions } = req.body;
    console.log(req.body, "estoy vacio")
    const newEvent: IEvent = { date, hour, direction, price, description, contact, sponsor, organizer, missions };
    const createdEvent = await EventService.createEvent(newEvent);
    res.status(201).json(createdEvent);
  } catch (error) {
    console.log("🚀 ~ createEvent ~ error:", error)
    res.status(500).json({ error: "Error al crear el evento" });
  }
};

export const updateEvent = async (req: Request, res: Response) => {
  console.log("~ updateEvent ~ req:", req.body)
  try {
    const eventId = req.params.id
    const { ...updateData } = req.body;
    const changedEvent = { ...updateData };
    const updatedEvent = await EventService.updateEvent(eventId, changedEvent);
    res.status(201).json(updatedEvent);
  } catch (error) {
    console.log("~ updateEvent ~ error:", error);
    res.status(500).json({ error: "Error al actualizar un evento" })

  }
}