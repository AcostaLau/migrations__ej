import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
// import { dataSourceOptions } from '../db/data-source';
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'lauti',
    password: 'admin123',
    database: 'mi_tienda',
    entities: ['**/*.entity{.ts,.js}'],
    migrations: ['db/migrations/*.js,.ts'],
  }), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
