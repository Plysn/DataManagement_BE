import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PhoneModule } from './phone/phone.module';
import { LaptopModule } from './laptop/laptop.module';
import { TabletModule } from './tablet/tablet.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://phuongly:phuongly@cluster0.5butxyw.mongodb.net/fpt?retryWrites=true&w=majority',
    ),

    PhoneModule,
    LaptopModule,
    TabletModule,
  ],
})
export class AppModule {}
