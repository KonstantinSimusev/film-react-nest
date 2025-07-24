import { Controller, Post, Body } from '@nestjs/common';

import { ITicket } from '../../shared/interfaces/api.interface';
import { CreateOrderDTO } from './dto/create-order.dto';

import { OrderService } from './order.service';

import { ApiListResponse } from '../../shared/interfaces/api.interface';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async createOrder(
    @Body() order: CreateOrderDTO,
  ): Promise<ApiListResponse<ITicket>> {
    const tickets = await this.orderService.createOrder(order);

    return {
      total: tickets.length,
      items: tickets,
    };
  }
}
