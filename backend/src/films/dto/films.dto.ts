import { IsString, IsNumber, IsArray, IsUUID, IsFQDN } from 'class-validator';

export class FilmDTO {
  @IsUUID('4')
  id: string;

  @IsNumber()
  rating: number;

  @IsString()
  director: string;

  @IsArray()
  tags: string[];

  @IsString()
  title: string;

  @IsString()
  about: string;

  @IsString()
  description: string;

  @IsFQDN()
  image: string;

  @IsFQDN()
  cover: string;
}
