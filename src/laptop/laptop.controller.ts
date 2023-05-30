import { Body, Controller, Get } from '@nestjs/common';
import { Laptop } from './laptop.schema';
import { LaptopService } from './laptop.service';
import { GetProductsDto } from 'src/getProduct.dto';

@Controller('laptops')
export class LaptopController {
  constructor(private laptopService: LaptopService) {}

  @Get()
  async findAll(@Body() getProductsDto: GetProductsDto): Promise<Laptop[]> {
    return this.laptopService.findAll(getProductsDto);
  }
}
