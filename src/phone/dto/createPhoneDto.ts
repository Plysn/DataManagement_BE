import { IsString, IsNotEmpty, IsUrl } from 'class-validator';

export class CreatePhoneDto {
  @IsNotEmpty()
  @IsString()
  product_name: string;

  @IsNotEmpty()
  @IsString()
  price_present: string;

  @IsNotEmpty()
  @IsString()
  price_old: string;

  @IsNotEmpty()
  @IsString()
  @IsUrl()
  image: string;

  @IsNotEmpty()
  @IsString()
  @IsUrl()
  link: string;
}

export class UpdatePhoneDto {
  @IsString()
  product_name?: string;

  @IsString()
  price_present?: string;

  @IsString()
  price_old?: string;

  @IsString()
  @IsUrl()
  image?: string;

  @IsString()
  @IsUrl()
  link?: string;
}
