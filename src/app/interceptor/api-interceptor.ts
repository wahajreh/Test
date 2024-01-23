// api-interceptor.ts

import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Modify the request as needed
    const modifiedRequest = request.clone({
      headers: request.headers.set('Authorization', 'Bearer YourAccessToken')
      // Add other headers or modify the request as needed
    });

    // Pass the modified request to the next handler
    return next.handle(modifiedRequest);
  }
}
