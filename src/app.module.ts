import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { PaymentsModule } from './payments/payments.module';
import { User } from './auth/user.entity';
import { Payment } from './payments/payment.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [User, Payment],
      synchronize: true, // set to false in production
    }),
    AuthModule,
    PaymentsModule,
  ],
})
export class AppModule {}
