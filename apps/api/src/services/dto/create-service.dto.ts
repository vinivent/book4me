import { Type } from 'class-transformer';
import {
  IsInt,
  IsNumber,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateServiceDto {
  @IsString()
  businessId!: string;

  @IsString()
  @MinLength(1)
  nome!: string;

  @Type(() => Number)
  @IsInt()
  @IsPositive()
  duracaoMin!: number;

  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  preco!: number;
}
