import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import User from '../user/user.entity';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import {
  ErrorFormatter,
  ResponseFormatter,
} from 'src/helper/responseFormatter';
import { ILoginProps, ISignupProps } from 'src/types/auth.types';
import { Logger } from 'src/helper/customLogger';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
    private readonly logger: Logger,
  ) {}

  async signUp(signUpDto: SignUpDto): Promise<ISignupProps> {
    try {
      this.logger.log('Signup started...');
      const { name, email, password } = signUpDto;

      const existingUser = await this.usersRepository.findOne({
        where: { email },
      });

      if (existingUser) {
        this.logger.warn('User already exists');
        throw new UnauthorizedException('User already exists');
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const user = this.usersRepository.create({
        name,
        email,
        password: hashedPassword,
      });

      await this.usersRepository.save(user);

      return ResponseFormatter({}, 'SignUp success');
    } catch (err) {
      throw ErrorFormatter(err, 'Signup failed, Check input details', true);
    }
  }

  async login(loginDto: LoginDto): Promise<ILoginProps> {
    try {
      this.logger.log('Login started...');

      const { email, password } = loginDto;

      const user = await this.usersRepository.findOne({
        where: { email },
      });

      if (!user) {
        this.logger.warn('User not exists');
        throw new UnauthorizedException('User not found');
      }

      const isPasswordMatched = await bcrypt.compare(password, user.password);

      if (!isPasswordMatched) {
        this.logger.warn('Wrong password');
        throw new UnauthorizedException('Invalid email or password');
      }

      const token = this.jwtService.sign({ email: user.email });

      return ResponseFormatter(
        { token, user: { name: user.name, email: user.email } },
        'Login success',
      );
    } catch (err) {
      throw ErrorFormatter(err, 'Invalid username or password..!');
    }
  }
}
