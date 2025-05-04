import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('DATABASE_URL'),
        connectionFactory: (connection) => {
          console.log('Connected to MongoDB');
          return connection;
        },
      }),
    }),
  ],
  exports: [MongooseModule], // Экспортируем модуль для использования в других модулях
})
export class DatabaseModule {}
