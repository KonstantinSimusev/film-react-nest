import { Controller, Post, Body } from '@nestjs/common';

import { CreateOrderDTO } from './dto/create-order.dto';
import { ITicket } from './entities/ticket.entity';
import { OrderService } from './order.service';

import { ApiListResponse } from '../utils/api-list-response';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async createOrder(
    @Body() orderData: CreateOrderDTO,
  ): Promise<ApiListResponse<ITicket>> {
    return this.orderService.createOrder(orderData);
  }
}
