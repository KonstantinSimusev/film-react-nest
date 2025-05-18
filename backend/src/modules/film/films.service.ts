import { Injectable } from '@nestjs/common';

import { IFilm } from '../../shared/interfaces/entities/films.entity';
import { ISсhedule } from '../../shared/interfaces/entities/sсhedule.entity';

import { FilmRepository } from './films.repository';

import { ApiListResponse } from '../../shared/interfaces/api/api-list-response.interface';

@Injectable()
export class FilmsService {
  constructor(private readonly filmRepository: FilmRepository) {}

  async getFilmsWithTotal(): Promise<ApiListResponse<IFilm>> {
    const items = await this.filmRepository.getAllFilms();

    return {
      total: items.length,
      items,
    };
  }

  async getSchedulesWithTotal(id: string): Promise<ApiListResponse<ISсhedule>> {
    const film = await this.filmRepository.getFilmById(id);
    const items = film.schedule;

    return {
      total: items.length,
      items,
    };
  }
}
