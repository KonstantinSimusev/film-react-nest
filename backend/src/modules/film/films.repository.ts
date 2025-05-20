import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Film } from './entities/film.entity';

@Injectable()
export class FilmRepository {
  constructor(
    @InjectRepository(Film)
    private readonly filmRepository: Repository<Film>,
  ) {}

  async getAllFilms(): Promise<Film[]> {
    const films = await this.filmRepository.find({
      relations: ['schedule'], // Загружаем связанные сеансы
    });

    // Преобразуем UUID в строку
    return films.map((film) => ({
      ...film,
      id: film.id.toString(),
      schedule: film.schedule.map((schedule) => ({
        ...schedule,
        id: schedule.id.toString(),
      })),
    }));
  }

  async getFilmById(id: string): Promise<Film | undefined> {
    const film = await this.filmRepository.findOne({
      where: { id },
      relations: ['schedule'], // Загружаем связанные сеансы
    });

    if (!film) {
      return undefined;
    }

    return {
      ...film,
      id: film.id.toString(),
      schedule: film.schedule.map((schedule) => ({
        ...schedule,
        id: schedule.id.toString(),
      })),
    };
  }
}
