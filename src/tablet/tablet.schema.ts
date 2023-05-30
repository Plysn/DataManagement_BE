import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TabletDocument = Tablet & Document;

@Schema({ collection: 'fpt_tablet' })
export class Tablet {
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

export const TabletSchema = SchemaFactory.createForClass(Tablet);
