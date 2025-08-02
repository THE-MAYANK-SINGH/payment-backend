// src/payments/payments.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Payment } from './payment.entity';
import { Between, Repository } from 'typeorm';

@Injectable()
export class PaymentsService {
  constructor(@InjectRepository(Payment) private repo: Repository<Payment>) {}

  create(data: Partial<Payment>) {
    return this.repo.save(data);
  }

  findAll() {
    return this.repo.find({ order: { createdAt: 'DESC' } });
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  async getStats() {
  const total = await this.repo.count();
  const failed = await this.repo.count({ where: { status: 'failed' } });

  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);

  const todayEnd = new Date();
  todayEnd.setHours(23, 59, 59, 999);

  const today = await this.repo.count({
    where: {
      createdAt: Between(todayStart, todayEnd),
    },
  });

  return {
    total: total,
    failed: failed,
    today: today,
  };
}
}
