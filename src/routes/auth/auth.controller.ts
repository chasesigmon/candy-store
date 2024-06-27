import { BadRequestException, Controller, Post } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Public } from './decorators';

@Public()
@Controller('/auth')
export class AuthController {
  constructor(private jwtService: JwtService) {}

  @Post('')
  async getToken() {
    const payload = { data: 'data' };
    return { access_token: this.jwtService.sign(payload) };
  }
}
