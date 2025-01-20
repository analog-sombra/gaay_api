import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StandardResponse } from 'src/lib/types';

@Injectable()
export class ResponseInterceptor<T>
  implements NestInterceptor<T, StandardResponse<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<StandardResponse<T>> {
    return next.handle().pipe(
      map((data) => {
        const { message, ...rest } = data as any;
        const isArray = Array.isArray(data);
        return {
          statusCode: context.switchToHttp().getResponse().statusCode,
          message: message || 'Request successful',
          data: isArray ? data : rest,
        };
      }),
    );
  }
}
