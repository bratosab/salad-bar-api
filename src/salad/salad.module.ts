import { Module } from '@nestjs/common';
import { SaladController } from './salad.controller';
import { SaladService } from './salad.service';
import { DataModule } from '../data/data.module';

@Module({
  controllers: [SaladController],
  providers: [SaladService],
  imports: [DataModule],
})
export class SaladModule {}
