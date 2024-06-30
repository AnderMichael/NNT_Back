import { IEvent } from "../models/event";
import EventRepository from "../repositories/eventRepository";

const getAllEvents = async(): Promise<IEvent[]> => {
  return EventRepository.findAll();
}

const getEventById = async(id: string): Promise<IEvent | null> => {
  return EventRepository.findById(id);
}

const createEvent = async(event: IEvent): Promise<IEvent> => {
  return EventRepository.create(event);
}

export default { getAllEvents, getEventById, createEvent };