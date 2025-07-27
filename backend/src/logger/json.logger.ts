import { LoggerService, Injectable } from '@nestjs/common';

@Injectable()
export class JsonLogger implements LoggerService {
  formatMessage(level: string, message: any, ...optionalParams: any[]) {
    return JSON.stringify({
      level,
      message,
      timestamp: new Date().toISOString(),
      ...optionalParams,
    });
  }

  /**
   * Write a 'log' level log.
   */
  log(message: any, ...optionalParams: any[]) {
    console.log(this.formatMessage('log', message, optionalParams));
  }

  /**
   * Write a 'fatal' level log.
   */
  fatal(message: any, ...optionalParams: any[]) {
    console.log(this.formatMessage('fatal', message, optionalParams));
  }

  /**
   * Write an 'info' level log.
   */
  info(message: any, ...optionalParams: any[]) {
    console.info(this.formatMessage('info', message, optionalParams));
  }

  /**
   * Write a 'warn' level log.
   */
  warn(message: any, ...optionalParams: any[]) {
    console.warn(this.formatMessage('warn', message, optionalParams));
  }

  /**
   * Write an 'error' level log.
   */
  error(message: any, ...optionalParams: any[]) {
    console.error(this.formatMessage('error', message, optionalParams));
  }

  /**
   * Write a 'debug' level log.
   */
  debug?(message: any, ...optionalParams: any[]) {
    console.debug(this.formatMessage('debug', message, optionalParams));
  }

  /**
   * Write a 'verbose' level log.
   */
  verbose?(message: any, ...optionalParams: any[]) {
    console.trace(this.formatMessage('verbose', message, optionalParams));
  }
}
