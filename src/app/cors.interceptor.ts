import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

export class CorsInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Añade el encabezado 'Access-Control-Allow-Origin' con el valor '*'
    // para permitir el acceso desde cualquier origen
    request = request.clone({
      setHeaders: {
        'Access-Control-Allow-Origin': '*'
      }
    });

    return next.handle(request);
  }
}
