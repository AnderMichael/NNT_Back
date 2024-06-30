import Event, { IEvent } from "../models/event";

const findAll = async (): Promise<IEvent[]> => {
  return Event.find();
};

const findById = async (id: string): Promise<IEvent | null> => {
  return Event.findById(id);
};

const create = async (event: IEvent): Promise<IEvent> => {
  const newEvent = new Event(event);
  return newEvent.save();
};

export default { findAll, findById, create };
