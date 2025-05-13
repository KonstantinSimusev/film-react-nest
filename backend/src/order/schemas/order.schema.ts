import { Schema, model } from 'mongoose';
import { ITicket } from '../entities/ticket.entity';

export const OrderSchema = new Schema<ITicket>({
  film: { type: String, required: true },
  session: { type: String, required: true },
  daytime: { type: String, required: true },
  row: { type: Number, required: true },
  seat: { type: Number, required: true },
  price: { type: Number, required: true },
});

export const OrderModel = model<ITicket>('Order', OrderSchema);
