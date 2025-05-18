import { Controller, Get, Param } from '@nestjs/common';

import { IFilm } from '../../shared/interfaces/entities/films.entity';
import { ISсhedule } from '../../shared/interfaces/entities/sсhedule.entity';
import { FilmsService } from './films.service';

import { ApiListResponse } from '../../shared/interfaces/api/api-list-response.interface';

@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @Get()
  async getAllFilms(): Promise<ApiListResponse<IFilm>> {
    return this.filmsService.getFilmsWithTotal();
  }

  @Get(':id/schedule')
  async getFilmSchedule(
    @Param('id') id: string,
  ): Promise<ApiListResponse<ISсhedule>> {
    return this.filmsService.getSchedulesWithTotal(id);
  }
}
