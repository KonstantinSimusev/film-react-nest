import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { ITicket } from './entities/ticket.entity';

@Injectable()
export class OrderRepository {
  constructor(@InjectModel('Order') private orderModel: Model<ITicket>) {}

  async getAllOrders(): Promise<ITicket[]> {
    const orders = await this.orderModel.find().lean();
    return orders;
  }

  async createOrder(order: ITicket): Promise<ITicket> {
    const newOrder = new this.orderModel(order);

    return newOrder.save();
  }
}
