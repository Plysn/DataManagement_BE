import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Tablet, TabletDocument } from './tablet.schema';
import { GetProductsDto } from 'src/getProduct.dto';

@Injectable()
export class TabletService {
  constructor(
    @InjectModel(Tablet.name) private tabletModel: Model<TabletDocument>,
  ) {}

  async findAll(getProductsDto: GetProductsDto): Promise<Tablet[]> {
    const page = getProductsDto?.page || 1;
    const keyword = getProductsDto?.keyword || '';
    const perPage = 10;
    const result = await this.tabletModel
      .find({ product_name: { $regex: keyword, $options: 'i' } })
      .skip((page - 1) * perPage)
      .limit(perPage)
      .exec();
    return result;
  }
}
