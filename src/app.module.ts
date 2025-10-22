import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'oracle',
      host: 'localhost',
      port: 1521,
      username: 'system',
      password: '12344qwe',
      sid: 'ORCL',
      synchronize: true,
      autoLoadEntities: true,
    }),
    UsersModule,
  ],
})
export class AppModule { }
