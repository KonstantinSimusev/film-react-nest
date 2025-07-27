import { Injectable } from '@nestjs/common';

import { IFilm, ITicket } from '../../shared/interfaces/api.interface';
import { CreateOrderDTO } from './dto/create-order.dto';

import { FilmsService } from '../film/films.service';

@Injectable()
export class OrderService {
  constructor(private readonly filmsService: FilmsService) {}

  async createOrder(order: CreateOrderDTO): Promise<ITicket[]> {
    const { tickets } = order;
    let film: IFilm | null = null;
    const sessionUpdates = new Map<string, string[]>();

    for (const ticket of tickets) {
      film = await this.filmsService.findById(ticket.film);

      if (!film) {
        throw new Error('Фильм не найден');
      }

      const session = film.schedule.find((s) => s.id === ticket.session);

      if (!session) {
        throw new Error('Сеанс не найден');
      }

      const seatKey = `${ticket.row}:${ticket.seat}`;

      if (session.taken.includes(seatKey)) {
        throw new Error('Место уже занято');
      }

      // Собираем все изменения для одного сеанса
      if (!sessionUpdates.has(ticket.session)) {
        sessionUpdates.set(ticket.session, [...session.taken]);
      }
      sessionUpdates.get(ticket.session)!.push(seatKey);
    }

    // Применяем все обновления
    for (const [sessionId, taken] of sessionUpdates.entries()) {
      await this.filmsService.updateTaken(film.id, sessionId, taken);
    }

    return tickets;
  }
}
