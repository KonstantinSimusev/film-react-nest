import { Injectable } from '@nestjs/common';

import { IFilm } from '../../shared/interfaces/api.interface';

import { FilmRepository } from './films.repository';

@Injectable()
export class FilmsService {
  constructor(private readonly filmRepository: FilmRepository) {}

  async findAll(): Promise<IFilm[]> {
    return this.filmRepository.findAll();
  }

  async findById(id: string): Promise<IFilm> {
    return this.filmRepository.findById(id);
  }

  async updateTaken(
    filmId: string,
    sessionId: string,
    newTaken: string[],
  ): Promise<string> {
    return this.filmRepository.updateTaken(filmId, sessionId, newTaken);
  }
}
