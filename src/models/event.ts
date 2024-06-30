import { Schema, model } from 'mongoose';

interface IEvent {
  date: Date;
  hour: string;
  direction: string;
  price: number;
  description: string;
  contact: string;
  sponsor: string;
  organizer: string;
  missions: any;
};

const eventSchema = new Schema<IEvent>({
  date: { type: Date, required: true },
  hour: { type: String, required: true },
  direction: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  contact: { type: String, required: true },
  sponsor: { type: String, required: true },
  organizer: { type: String, required: true },
  missions: { type: JSON, required: true }
});

const Event = model<IEvent>('Event', eventSchema);

export default Event;
export { IEvent };
