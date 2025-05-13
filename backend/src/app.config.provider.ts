import { ConfigService } from '@nestjs/config';

export const configProvider = {
  inject: [ConfigService],
  provide: 'CONFIG',
  useFactory: (configService: ConfigService) => ({
    database: {
      driver: configService.get<string>('DATABASE_DRIVER'),
      url: configService.get<string>('DATABASE_URL'),
    },
    port: configService.get<number>('PORT'),
  }),
};
