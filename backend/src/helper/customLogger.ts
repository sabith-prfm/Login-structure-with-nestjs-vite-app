import { LoggerService } from '@nestjs/common';

export class Logger implements LoggerService {
  log(message: string, context?: string) {
    console.log(`[Custom Logger] ${context ? `[${context}] ` : ''}${message}`);
  }

  error(message: string, trace: string, context?: string) {
    console.error(
      `[Custom Logger] ${context ? `[${context}] ` : ''}${message}`,
    );
    console.error(trace);
  }

  warn(message: string, context?: string) {
    console.warn(`[Custom Logger] ${context ? `[${context}] ` : ''}${message}`);
  }
}
