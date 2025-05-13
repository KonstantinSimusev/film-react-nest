import { ConflictException, Injectable } from '@nestjs/common';

import { OrderRepository } from './order.repository';
import { CreateOrderDTO } from './dto/create-order.dto';
import { ITicket } from './entities/ticket.entity';

import { ApiListResponse } from 'src/utils/api-list-response';

@Injectable()
export class OrderService {
  constructor(private orderRepository: OrderRepository) {}

  async createOrder(
    orderData: CreateOrderDTO,
  ): Promise<ApiListResponse<ITicket>> {
    const { tickets } = orderData;
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
        // Если место свободно, создаем заказ
        const newOrder = await this.orderRepository.createOrder(ticket);
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
