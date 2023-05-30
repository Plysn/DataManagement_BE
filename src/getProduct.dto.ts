import { Optional } from '@nestjs/common';
import { IsInt, Min, IsString } from 'class-validator';

export class GetProductsDto {
  @IsInt()
  @Min(1)
  page: number;

  @IsString()
  @Optional()
  keyword: string;
}
