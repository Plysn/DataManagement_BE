import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LaptopController } from './laptop.controller';
import { Laptop, LaptopSchema } from './laptop.schema';
import { LaptopService } from './laptop.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Laptop.name, schema: LaptopSchema }]),
  ],
  controllers: [LaptopController],
  providers: [LaptopService],
})
export class LaptopModule {}
