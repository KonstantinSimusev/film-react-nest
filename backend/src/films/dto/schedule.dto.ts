import {
  IsString,
  IsNumber,
  IsArray,
  IsUUID,
  IsPositive,
  ValidateNested,
  IsNotEmpty,
} from 'class-validator';

export class ScheduleDTO {
  @IsUUID('4')
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  daytime: string;

  @IsNumber()
  @IsPositive()
  hall: number;

  @IsNumber()
  @IsPositive()
  rows: number;

  @IsNumber()
  @IsPositive()
  seats: number;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsArray()
  @ValidateNested({ each: true })
  @IsNotEmpty()
  taken: string[];
}
