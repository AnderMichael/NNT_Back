import { Schema, model } from 'mongoose';

interface IUser {
  name: string;
  email: string;
  password: string;
  description?: string;
  username: string;
  goals: any[];
  last_events: any[];
  fav_event: any;
  missions: number;
  photo:string;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  description: { type: String },
  username: { type: String, required: true, unique: true },
  goals: { type: [], default: [] },
  last_events: { type: [Schema.Types.ObjectId], default: [] },
  fav_event: { type: Schema.Types.ObjectId, default: ""},
  missions: {type: Number},
});

const User = model<IUser>('User', userSchema);

export default User;
export { IUser };
