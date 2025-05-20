import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Ticket } from './entities/ticket.entity';

@Injectable()
export class OrderRepository {
  constructor(
    @InjectRepository(Ticket)
    private readonly ticketRepository: Repository<Ticket>,
  ) {}

  async getAllOrders(): Promise<Ticket[]> {
    return await this.ticketRepository.find();
  }

  async createOrder(order: Ticket): Promise<Ticket> {
    return await this.ticketRepository.save(order);
  }
}