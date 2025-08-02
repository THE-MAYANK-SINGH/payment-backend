import { Controller, Post, Body, OnModuleInit } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController implements OnModuleInit {
  constructor(private authService: AuthService) {}

  async onModuleInit() {
    await this.authService.seedUser();
  }

  @Post('login')
  login(@Body() body: { username: string; password: string }) {
    return this.authService.validateUser(body.username, body.password);
  }
}
