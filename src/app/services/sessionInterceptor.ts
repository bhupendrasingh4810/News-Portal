import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpHeaders, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { APIConstants } from '../api/api.constants';
import 'rxjs/add/operator/do';

@Injectable({
    providedIn: 'root'
})

export class SessionInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let headers = new HttpHeaders({
            'Authorization': APIConstants.NEWS_API_KEY
        });

        request = request.clone({ headers });
        return next.handle(request).do((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) { }
        }, (err: any) => {
            if (err instanceof HttpErrorResponse) { }
        });
    }
}