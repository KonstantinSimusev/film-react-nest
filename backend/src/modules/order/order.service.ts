import { ConflictException, Injectable } from '@nestjs/common';

import { ITicket } from '../../shared/interfaces/entities/ticket.entity';
import { CreateOrderDTO } from './dto/create-order.dto';

import { OrderRepository } from './order.repository';

import { ApiListResponse } from '../../shared/interfaces/api/api-list-response.interface';
import { Ticket } from './entities/ticket.entity';

@Injectable()
export class OrderService {
  constructor(private orderRepository: OrderRepository) {}

  async createOrder(
    createOrderDTO: CreateOrderDTO,
  ): Promise<ApiListResponse<ITicket>> {
    const { tickets } = createOrderDTO;
    const items: ITicket[] = [];
    const busyAllSeats = new Set<string>(); // Создаем set для хранения занятых мест
    const currentBusySeats: string[] = []; // Массив для хранения всех занятых мест

    // Получаем все существующие заказы для проверки занятых мест
    const createdOrders = await this.orderRepository.getAllOrders();
    createdOrders.forEach((order) => {
      busyAllSeats.add(`${order.row}:${order.seat}`);
    });

    for (const ticket of tickets) {
      // Получаем место из текущего билета
      const currentSeat = `${ticket.row}:${ticket.seat}`;

      // Проверяем занятость места
      if (busyAllSeats.has(currentSeat)) {
        currentBusySeats.push(currentSeat);
      } else {
        // Создаем новый объект Ticket из DTO
        const newTicket = new Ticket();
        newTicket.film = ticket.film;
        newTicket.session = ticket.session;
        newTicket.daytime = ticket.daytime;
        newTicket.row = ticket.row;
        newTicket.seat = ticket.seat;
        newTicket.price = ticket.price;
        newTicket.schedule = ticket.schedule;

        // Если место свободно, создаем заказ
        const newOrder = await this.orderRepository.createOrder(newTicket);
        items.push(newOrder);
        
        // Добавляем занятое место в set
        busyAllSeats.add(currentSeat);
      }
    }

    // Если есть занятые места, выбрасываем исключение со списком всех занятых мест
    if (currentBusySeats.length > 0) {
      throw new ConflictException(
        `Следующие места уже заняты: ${currentBusySeats.join(', ')}`,
      );
    }

    return {
      total: items.length,
      items,
    };
  }
}
