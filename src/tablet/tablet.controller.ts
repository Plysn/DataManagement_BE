import { Body, Controller, Get } from '@nestjs/common';
import { Tablet } from './tablet.schema';
import { TabletService } from './tablet.service';
import { GetProductsDto } from 'src/getProduct.dto';

@Controller('tablets')
export class TabletController {
  constructor(private tabletService: TabletService) {}

  @Get()
  async findAll(@Body() getProductsDto: GetProductsDto): Promise<Tablet[]> {
    return this.tabletService.findAll(getProductsDto);
  }
}
