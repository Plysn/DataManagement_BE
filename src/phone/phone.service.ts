import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Phone, PhoneDocument } from './phone.schema';
import { GetProductsDto } from 'src/getProduct.dto';
import { CreatePhoneDto, UpdatePhoneDto } from './dto/createPhoneDto';

@Injectable()
export class PhoneService {
  constructor(
    @InjectModel(Phone.name) private phoneModel: Model<PhoneDocument>,
  ) {}

  async findAll(getProductsDto: GetProductsDto): Promise<Phone[]> {
    const page = getProductsDto?.page || 1;
    const keyword = getProductsDto?.keyword || '';
    const perPage = 10;
    const result = await this.phoneModel
      .find({ product_name: { $regex: keyword, $options: 'i' } })
      .skip((page - 1) * perPage)
      .limit(perPage)
      .exec();
    return result;
  }

  async createPhone(createPhoneDto: CreatePhoneDto): Promise<Phone> {
    const newPhone = new this.phoneModel(createPhoneDto);
    const savedPhone = await newPhone.save();
    return savedPhone;
  }
  async updatePhone(
    id: string,
    updatePhoneDto: UpdatePhoneDto,
  ): Promise<Phone | null> {
    const updatedPhone = await this.phoneModel.findByIdAndUpdate(
      id,
      updatePhoneDto,
      { new: true },
    );
    return updatedPhone;
  }
  async deletePhone(id: string): Promise<boolean> {
    const deletedPhone = await this.phoneModel.findByIdAndDelete(id);
    return !!deletedPhone;
  }
}
