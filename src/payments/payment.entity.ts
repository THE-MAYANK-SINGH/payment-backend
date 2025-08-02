// src/payments/payment.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column()
  receiver: string;

  @Column()
  status: 'success' | 'failed' | 'pending';

  @Column()
  method: 'card' | 'upi' | 'netbanking';

  @CreateDateColumn()
  createdAt: Date;
}
