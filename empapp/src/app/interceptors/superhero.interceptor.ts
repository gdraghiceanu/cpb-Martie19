import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse
} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class SuperheroInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const modified = req.clone({
      headers: req.headers.set('Authorization', 'Bearer 11231233213')
      //setHeaders: { 'MySecondFavoriteHero': 'Ironman' }
    });
    return next.handle(modified).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('Status:' + event.status + ' - ' + event.statusText);
          console.log(event.body);
        }
      })
    );
  }
}
