import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Film } from './entities/film.entity';

@Injectable()
export class FilmRepository {
  constructor(@InjectModel('Film') private readonly filmModel: Model<Film>) {}

  async getAllFilms(): Promise<Film[]> {
    const films = await this.filmModel.find().lean();

    return films.map((film) => ({
      ...film,
      id: film._id.toString(),
      _id: undefined,
    }));
  }

  async getFilmById(id: string): Promise<Film | null> {
    const film = await this.filmModel.findById(id);
    return film;
  }
}
