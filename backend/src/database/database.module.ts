import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Film } from '../modules/film/entities/film.entity';
import { Schedule } from '../modules/film/entities/schedule.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (
        configService: ConfigService,
      ): Promise<TypeOrmModuleOptions> => {
        const dbUrl = configService.get<string>('DB_ADDRESS');

        return {
          type: 'postgres',
          url: dbUrl,
          entities: [Film, Schedule],
          synchronize: false,
        };
      },
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}

// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { config } from '../app.config';

// const { database } = config;

// @Module({
//   imports: [
//     MongooseModule.forRootAsync({
//       useFactory: async () => {
//         return {
//           uri: database.url,
//           authSource: 'admin',
//         };
//       },
//     }),
//   ],
//   exports: [MongooseModule],
// })
// export class DatabaseModule {}
