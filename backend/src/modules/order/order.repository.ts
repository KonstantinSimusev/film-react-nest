import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Ticket } from './entities/ticket.entity';

@Injectable()
export class OrderRepository {
  constructor(@InjectModel('Order') private orderModel: Model<Ticket>) {}

  async getAllOrders(): Promise<Ticket[]> {
    const orders = await this.orderModel.find().lean();
    return orders;
  }

  async createOrder(order: Ticket): Promise<Ticket> {
    const newOrder = new this.orderModel(order);

    return newOrder.save();
  }
}
