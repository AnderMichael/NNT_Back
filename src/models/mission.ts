import mongoose, { Document, Schema } from 'mongoose';

export interface IMission extends Document {
  icon: string;
  statement: string;
  status: number;
  type: string;
}

const MissionSchema: Schema = new Schema({
  icon: { type: String, required: true },
  statement: { type: String, required: true },
  status: { type: Number, required: true },
  type: { type: String, required: true }
});

export default mongoose.model<IMission>('Mission', MissionSchema);
