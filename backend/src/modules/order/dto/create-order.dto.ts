import {
  IsString,
  IsDateString,
  IsNumber,
  IsPositive,
  IsNotEmpty,
  Min,
  Max,
  IsEmail,
  IsArray,
  ValidateNested,
  ValidationOptions,
} from 'class-validator';
import { Type } from 'class-transformer';

// Создаем общий объект с опциями валидации для сообщений
const commonOptions: ValidationOptions = {
  message: 'Поле обязательно для заполнения',
};

export class TicketDTO {
  @IsString()
  @IsNotEmpty(commonOptions)
  film: string;

  @IsString()
  @IsNotEmpty(commonOptions)
  session: string;

  @IsDateString({}, { message: 'Некорректная дата и время' })
  @IsNotEmpty(commonOptions)
  daytime: string;

  @IsNumber({}, { message: 'Номер ряда должен быть числом' })
  @IsPositive({ message: 'Номер ряда должен быть положительным числом' })
  @Min(1, { message: 'Номер ряда должен быть больше 0' })
  @Max(100, { message: 'Номер ряда не может превышать 100' })
  row: number;

  @IsNumber({}, { message: 'Номер места должен быть числом' })
  @IsPositive({ message: 'Номер места должен быть положительным числом' })
  @Min(1, { message: 'Номер места должен быть больше 0' })
  @Max(50, { message: 'Номер места не может превышать 50' })
  seat: number;

  @IsNumber({}, { message: 'Цена должна быть числом' })
  @IsPositive({ message: 'Цена должна быть положительным числом' })
  price: number;
}

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
