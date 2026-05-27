import { Type } from 'class-transformer';
import { IsDateString, IsInt, IsPositive, IsString } from 'class-validator';

export class GenerateSlotsDto {
  @IsString()
  businessId!: string;

  @IsDateString()
  inicio!: string;

  @IsDateString()
  fim!: string;

  @Type(() => Number)
  @IsInt()
  @IsPositive()
  duracaoMin!: number;
}
