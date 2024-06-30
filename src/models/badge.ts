import { Schema, model } from 'mongoose';

interface IBadge {
  name: string,
  image: string,
};

const badgeSchema = new Schema<IBadge>({
  name: { type: String, required: true},
  image: {type: String, required: true}
});

const Badge = model<IBadge>('Badge', badgeSchema);

export default Badge;
export { IBadge };
