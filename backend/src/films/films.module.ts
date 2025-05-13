import { Module } from '@nestjs/common';
import { FilmsService } from './films.service';
import { FilmsController } from './films.controller';
import { FilmRepository } from './films.repository';
import { FilmSchema } from './schemas/films.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Film', schema: FilmSchema }])],
  controllers: [FilmsController],
  providers: [FilmRepository, FilmsService],
  exports: [FilmRepository],
})
export class FilmsModule {}
