import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LaptopDocument = Laptop & Document;

@Schema({ collection: 'fpt_laptop' })
export class Laptop {
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

export const LaptopSchema = SchemaFactory.createForClass(Laptop);
