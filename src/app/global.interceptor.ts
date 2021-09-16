import { Injectable } from "@angular/core";
import { HttpClient, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HttpEvent } from "@angular/common/http";

import { Observable } from "rxjs";

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: any = window.localStorage.getItem('auth_token')
    const authReq = req.clone({ headers: req.headers.set('Authentication', 'Bearer ' + token) })
    return next.handle(authReq)
  }
}