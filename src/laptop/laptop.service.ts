import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Laptop, LaptopDocument } from './laptop.schema';
import { GetProductsDto } from 'src/getProduct.dto';

@Injectable()
export class LaptopService {
  constructor(
    @InjectModel(Laptop.name) private laptopModel: Model<LaptopDocument>,
  ) {}

  async findAll(getProductsDto: GetProductsDto): Promise<Laptop[]> {
    const page = getProductsDto?.page || 1;
    const keyword = getProductsDto?.keyword || '';
    const perPage = 10;
    const result = await this.laptopModel
      .find({ product_name: { $regex: keyword, $options: 'i' } })
      .skip((page - 1) * perPage)
      .limit(perPage)
      .exec();
    return result;
  }
}
