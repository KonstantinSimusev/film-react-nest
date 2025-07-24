import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FilmRepository } from './films.repository';

import { FilmsService } from './films.service';
import { FilmsController } from './films.controller';

import { Film } from './entities/film.entity';
import { Schedule } from './entities/schedule.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Film, Schedule])],
  controllers: [FilmsController],
  providers: [FilmsService, FilmRepository],
  exports: [FilmsService, FilmRepository],
})
export class FilmsModule {}

// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';

// import { FilmSchema } from './entities/film.entity';

// import { FilmRepository } from './films.repository';

// import { FilmsService } from './films.service';
// import { FilmsController } from './films.controller';

// @Module({
//   imports: [
//     MongooseModule.forFeature([{ name: 'Film', schema: FilmSchema }]),
//   ],
//   controllers: [FilmsController],
//   providers: [FilmsService, FilmRepository],
//   exports: [FilmsService, FilmRepository],
// })
// export class FilmsModule {}
