import { Injectable } from '@nestjs/common';

import { FilmRepository } from './films.repository';
import { IFilm } from './entities/films.entity';
import { ISсhedule } from './entities/sсhedule.entity';

import { ApiListResponse } from '../utils/api-list-response';

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
