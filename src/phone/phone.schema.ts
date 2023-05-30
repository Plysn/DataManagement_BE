import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PhoneDocument = Phone & Document;

@Schema({ collection: 'fpt_dienthoai' })
export class Phone {
  @Prop()
  product_name: string;

  @Prop()
  price_present: string;

  @Prop()
  price_old: string;

  @Prop()
  image: string;

  @Prop()
  link: string;
}

export const PhoneSchema = SchemaFactory.createForClass(Phone);
