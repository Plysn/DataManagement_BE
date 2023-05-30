import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PhoneController } from './phone.controller';
import { Phone, PhoneSchema } from './phone.schema';
import { PhoneService } from './phone.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Phone.name, schema: PhoneSchema }]),
  ],
  controllers: [PhoneController],
  providers: [PhoneService],
})
export class PhoneModule {}
