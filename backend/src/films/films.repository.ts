import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { IFilm } from './entities/films.entity';

@Injectable()
export class FilmRepository {
  constructor(@InjectModel('Film') private readonly filmModel: Model<IFilm>) {}

  async getAllFilms(): Promise<IFilm[]> {
    const films = await this.filmModel.find().lean();

    return films.map((film) => ({
      ...film,
      id: film._id.toString(),
      _id: undefined,
    }));
  }

  async getFilmById(id: string): Promise<IFilm | null> {
    const film = await this.filmModel.findById(id);
    return film;
  }
}
