import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Ticket {
  @Prop({ type: String, required: true })
  film: string;

  @Prop({ type: String, required: true })
  session: string;

  @Prop({ type: String, required: true })
  daytime: string;

  @Prop({ type: Number, required: true })
  row: number;

  @Prop({ type: Number, required: true })
  seat: number;

  @Prop({ type: Number, required: true })
  price: number;
}

export const OrderSchema = SchemaFactory.createForClass(Ticket);
