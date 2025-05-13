import {
  IsEmail,
  IsArray,
  ValidateNested,
  IsNotEmpty,
  ValidationOptions,
} from 'class-validator';
import { Type } from 'class-transformer';

import { TicketDTO } from './ticket.dto';

// Создаем общий объект с опциями валидации для сообщений
const commonOptions: ValidationOptions = {
  message: 'Поле обязательно для заполнения',
};

export class CreateOrderDTO {
  @IsEmail({}, { message: 'Некорректный email' })
  @IsNotEmpty(commonOptions)
  email: string;

  @IsNotEmpty(commonOptions)
  phone: string;

  @IsArray({ message: 'Билеты должны быть массивом' })
  @IsNotEmpty({ message: 'Список билетов не может быть пустым' })
  @Type(() => TicketDTO)
  @ValidateNested({ each: true })
  tickets: TicketDTO[];
}
