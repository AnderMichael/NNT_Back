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

const update = async (eventId: string, updateData: IEvent) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(eventId, updateData)
    console.log(updatedEvent)
    console.log("Succesfully updated event")
    return updatedEvent
  } catch (error) {
    console.log("Failed to update event", error)
  }
}

export default { findAll, findById, create, update };
