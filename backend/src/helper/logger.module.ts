import { Module } from '@nestjs/common';
import { Logger } from './customLogger';

@Module({
  providers: [Logger],
  exports: [Logger],
})
export class LoggerModule {}
