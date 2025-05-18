import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { FilmSchema } from './entities/film.entity';

import { FilmRepository } from './films.repository';
import { FilmsService } from './films.service';
import { FilmsController } from './films.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Film', schema: FilmSchema }])],
  controllers: [FilmsController],
  providers: [FilmRepository, FilmsService],
  exports: [FilmRepository],
})
export class FilmsModule {}
