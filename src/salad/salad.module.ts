import { Module } from '@nestjs/common';
import { SaladController } from './salad.controller';
@Module({
  controllers: [SaladController],
})
export class SaladModule {}
