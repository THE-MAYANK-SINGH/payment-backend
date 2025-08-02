import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.userRepo.findOne({ where: { username } });
    if (user && await bcrypt.compare(password, user.password)) {
      const payload = { sub: user.id, username: user.username, role: user.role };
      return { access_token: this.jwtService.sign(payload) };
    }
  throw new UnauthorizedException('Invalid credentials');
  }


  async seedUser() {
    const existing = await this.userRepo.findOne({ where: { username: 'admin' } });
    if (!existing) {
      const hashed = bcrypt.hashSync('password', 10);
      const user = this.userRepo.create({ username: 'admin', password: hashed });
      await this.userRepo.save(user);
    }
  }
}
