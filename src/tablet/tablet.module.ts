import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TabletController } from './tablet.controller';
import { Tablet, TabletSchema } from './tablet.schema';
import { TabletService } from './tablet.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Tablet.name, schema: TabletSchema }]),
  ],
  controllers: [TabletController],
  providers: [TabletService],
})
export class TabletModule {}
