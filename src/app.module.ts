import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { Email } from './email/email.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'users-list',
      entities: [
        User,
        Email
      ],
      synchronize: true,
      logging: true
    }),
    TypeOrmModule.forFeature([
      User,
      Email
    ])
  ],
  controllers: [
    UserController
  ],
  providers: [
    UserService
  ],
})
export class AppModule {}
