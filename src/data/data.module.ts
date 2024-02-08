import { Module } from '@nestjs/common';
import {
  ClientProvider,
  ClientsModule,
  Transport,
} from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        imports: [ConfigModule],
        name: 'DATA',
        useFactory: (config: ConfigService) => {
          console.log(config.get('DATA_MS_PORT'));
          const params: ClientProvider = {
            transport: Transport.TCP,
            options: {
              port: config.get('DATA_MS_PORT'),
            },
          };
          return params;
        },
        inject: [ConfigService],
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class DataModule {}
