import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name);

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const controller = context.getClass();
    const [req]: [Request] = context.getArgs();

    const start = Date.now();

    return next
      .handle()
      .pipe(
        tap(() =>
          this.logger.log(
            `Time spent on [${controller.name}] ${req.originalUrl} : ${Date.now() - start}ms`,
          ),
        ),
      );
  }
}
