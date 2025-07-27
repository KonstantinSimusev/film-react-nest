import { Controller, Get, Param } from '@nestjs/common';

import { IFilm, ISсhedule } from '../../shared/interfaces/api.interface';
import { FilmsService } from './films.service';

import { ApiListResponse } from '../../shared/interfaces/api.interface';

@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @Get()
  async findAll(): Promise<ApiListResponse<IFilm>> {
    const films = await this.filmsService.findAll();

    return {
      total: films.length,
      items: films,
    };
  }

  @Get(':id/schedule')
  async findSchedule(
    @Param('id') id: string,
  ): Promise<ApiListResponse<ISсhedule>> {
    const film = await this.filmsService.findById(id);

    return {
      total: film.schedule.length,
      items: film.schedule,
    };
  }
}
