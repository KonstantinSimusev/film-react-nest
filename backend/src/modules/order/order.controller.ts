import { Controller, Post, Body } from '@nestjs/common';

import { ITicket } from '../../shared/interfaces/entities/ticket.entity';
import { CreateOrderDTO } from './dto/create-order.dto';

import { OrderService } from './order.service';

import { ApiListResponse } from '../../shared/interfaces/api/api-list-response.interface';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async createOrder(
    @Body() createOrderData: CreateOrderDTO,
  ): Promise<ApiListResponse<ITicket>> {
    return this.orderService.createOrder(createOrderData);
  }
}
