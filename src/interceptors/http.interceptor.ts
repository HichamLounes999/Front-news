import { Injectable } from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http"
import { Observable } from "rxjs";


@Injectable()
export class HttpCorsInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders:{
        'Content-type': 'application/json',
        'Access-Control-Allow-origin': '*'
      }
    });
    return next.handle(req);
  }

}
