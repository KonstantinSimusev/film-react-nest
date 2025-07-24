import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Film } from './entities/film.entity';
import { Schedule } from './entities/schedule.entity';

@Injectable()
export class FilmRepository {
  constructor(
    @InjectRepository(Film)
    private readonly filmRepository: Repository<Film>,
    @InjectRepository(Schedule)
    private readonly scheduleRepository: Repository<Schedule>,
  ) {}

  async findAll(): Promise<Film[]> {
    return this.filmRepository.find({
      relations: ['schedule'],
    });
  }

  async findById(id: string): Promise<Film> {
    return this.filmRepository.findOne({
      where: { id },
      relations: ['schedule'],
    });
  }

  async updateTaken(
    filmId: string,
    sessionId: string,
    newTaken: string[],
  ): Promise<string> {
    try {
      const currentFilm = await this.filmRepository.findOne({
        where: { id: filmId },
        relations: ['schedule'],
      });

      if (!currentFilm) {
        throw new Error('Фильм не найден');
      }

      // Находим нужный сеанс
      const session = currentFilm.schedule.find(
        (session) => session.id === sessionId,
      );

      if (!session) {
        throw new Error('Сеанс не найден');
      }

      // Обновляем через отдельный репозиторий
      await this.scheduleRepository.update(
        { id: sessionId },
        { taken: newTaken },
      );

      return 'Список занятых мест успешно обновлен';
    } catch (error) {
      console.error('Ошибка при обновлении taken:', error);
      throw new Error('Не удалось обновить список занятых мест');
    }
  }
}

// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';

// import { Film } from './entities/film.entity';

// @Injectable()
// export class FilmRepository {
//   constructor(@InjectModel('Film') private readonly filmModel: Model<Film>) {}

//   async findAll(): Promise<Film[]> {
//     const films = await this.filmModel.find().lean();

//     return films.map((film) => ({
//       ...film,
//       id: film._id.toString(),
//       _id: undefined,
//     }));
//   }

//   async findById(id: string): Promise<Film | null> {
//     const film = await this.filmModel.findById(id);
//     return film;
//   }

//   async updateTaken(
//     filmId: string,
//     sessionId: string,
//     newTaken: string[],
//   ): Promise<string> {
//     try {
//       const currentFilm = await this.filmModel.findOne({ id: filmId });

//       if (!currentFilm) {
//         throw new Error('Фильм не найден');
//       }

//       // Находим нужный сеанс
//       const sessionIndex = currentFilm.schedule.findIndex(
//         (session) => session.id === sessionId,
//       );

//       if (sessionIndex === -1) {
//         throw new Error('Сеанс не найден');
//       }

//       // Обновляем только taken для конкретного сеанса
//       currentFilm.schedule[sessionIndex].taken = newTaken;

//       await currentFilm.save();

//       return 'Список занятых мест успешно обновлен';
//     } catch (error) {
//       console.error('Ошибка при обновлении taken:', error);
//       throw new Error('Не удалось обновить список занятых мест');
//     }
//   }
// }
