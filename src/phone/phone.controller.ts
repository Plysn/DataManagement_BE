import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PhoneService } from './phone.service';
import { Phone } from './phone.schema';
import { GetProductsDto } from 'src/getProduct.dto';
import { CreatePhoneDto, UpdatePhoneDto } from './dto/createPhoneDto';

@Controller('phones')
export class PhoneController {
  constructor(private phoneService: PhoneService) {}

  @Get()
  async findAll(@Body() getProductsDto: GetProductsDto): Promise<Phone[]> {
    return this.phoneService.findAll(getProductsDto);
  }
  @Post()
  async create(@Body() createPhoneDto: CreatePhoneDto): Promise<Phone> {
    return this.phoneService.createPhone(createPhoneDto);
  }
  @Patch('/:id')
  async update(
    @Param('id') id: string,
    @Body() updatePhoneDto: UpdatePhoneDto,
  ): Promise<Phone> {
    return this.phoneService.updatePhone(id, updatePhoneDto);
  }
  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<boolean> {
    return this.phoneService.deletePhone(id);
  }
}
