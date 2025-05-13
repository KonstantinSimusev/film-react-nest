import { IFilm } from '../films/entities/films.entity';
import mongoJson from '../../test/mongodb_initial_stub.json';

// Создаем класс репозитория
export class FilmRepository {
  private films: IFilm[] = [];

  constructor() {
    // Загружаем начальные данные из файла
    this.loadInitialData();
  }

  private async loadInitialData(): Promise<void> {
    try {
      this.films = mongoJson;
    } catch (error) {
      console.error('Ошибка при загрузке начальных данных:', error);
    }
  }

  // Получение всех фильмов
  findAll(): IFilm[] {
    return this.films;
  }

  // Получение фильма по ID
  findById(id: string): IFilm | undefined {
    return this.films.find((film) => film.id === id);
  }

  // Добавление нового фильма
  create(film: IFilm): void {
    this.films.push(film);
  }

  // Обновление фильма
  update(film: IFilm): void {
    const index = this.films.findIndex((f) => f.id === film.id);
    if (index !== -1) {
      this.films[index] = film;
    }
  }

  // Удаление фильма
  delete(id: string): void {
    this.films = this.films.filter((film) => film.id !== id);
  }
}
