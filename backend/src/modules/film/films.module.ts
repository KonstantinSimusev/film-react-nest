import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Film } from './entities/film.entity';
import { Schedule } from './entities/schedule.entity'; 

import { FilmRepository } from './films.repository';
import { FilmsService } from './films.service';
import { FilmsController } from './films.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Film, Schedule]),
  ],
  controllers: [FilmsController],
  providers: [FilmRepository, FilmsService],
  exports: [FilmRepository],
})
export class FilmsModule {}
