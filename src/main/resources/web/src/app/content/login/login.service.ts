import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { login } from './../../../config';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Injectable()

export class loginService {
private loginURL: string = login.login;

    constructor(private http: Http) { }

login(data: any): Observable<any> {
        return this.http.get(`${this.loginURL}/?databaseName=${data.databaseName}&ip=${data.ip}&userName=${data.userName}&password=${data.password}`)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body;
    }

    private handleError(error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Observable.throw(errMsg);
    }
}