import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IngredientController } from './ingredient/ingredient.controller';
import { ToppingsService } from './toppings/toppings.service';
import { DressingsService } from './dressings/dressings.service';
import { SaladModule } from './salad/salad.module';
import { RouterModule, Routes } from '@nestjs/core';
import { DataModule } from './data/data.module';
import { ConfigModule } from '@nestjs/config';

const routes: Routes = [{ path: 'salad', module: SaladModule }];

@Module({
  imports: [
    SaladModule,
    RouterModule.register(routes),
    DataModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController, IngredientController],
  providers: [AppService, ToppingsService, DressingsService],
})
export class AppModule {}
