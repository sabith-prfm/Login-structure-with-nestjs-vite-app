import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { SignUpDto } from './dto/signup.dto';
import { ILoginProps, ISignupProps } from 'src/types/auth.types';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    // private readonly logger: Logger,
  ) {}

  @Post('/signup')
  signUp(@Body() signUpDto: SignUpDto): Promise<ISignupProps> {
    return this.authService.signUp(signUpDto);
  }

  @Post('/login')
  login(@Body() loginDto: LoginDto): Promise<ILoginProps> {
    // this.logger.log('Login starts...');
    return this.authService.login(loginDto);
  }
}
