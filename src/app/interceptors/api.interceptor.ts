import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ApiInterceptor implements HttpInterceptor{

    apiKey = '3c14b7b4185ad79a7774f19d4e83c314';

    intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const modreq = req.clone({
            setHeaders:{
                'x-rapidapi-key': this.apiKey
            }
        });
        return next.handle(modreq);
    }
}