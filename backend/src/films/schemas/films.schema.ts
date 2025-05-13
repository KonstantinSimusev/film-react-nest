import { Schema, model } from 'mongoose';
import { IFilm } from '../entities/films.entity';
import { ISсhedule } from '../entities/sсhedule.entity';

export const ScheduleSchema = new Schema<ISсhedule>({
  id: { type: String, required: true },
  daytime: { type: String, required: true },
  hall: { type: Number, required: true },
  rows: { type: Number, required: true },
  seats: { type: Number, required: true },
  price: { type: Number, required: true },
  taken: { type: [String], required: true },
});

export const FilmSchema = new Schema({
  id: { type: String, required: true },
  rating: { type: Number, required: true },
  director: { type: String, required: true },
  tags: { type: [String], required: true },
  image: { type: String, required: true },
  cover: { type: String, required: true },
  title: { type: String, required: true },
  about: { type: String, required: true },
  description: { type: String, required: true },
  schedule: [ScheduleSchema],
});

export const FilmModel = model<IFilm>('Film', FilmSchema);
