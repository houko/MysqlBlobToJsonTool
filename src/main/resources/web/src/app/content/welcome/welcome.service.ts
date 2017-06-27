import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { list,login } from './../../../config';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import axios from 'axios'
@Injectable()

export class welcomeService {
private listURL: string = list.all;
private logoutURL: string = login.logout;
private listByTableURL: string = list.listByTable;
private listByTableMoreURL: string = list.listByTableMore;

    constructor(private http: Http) { }

list(): Observable<any> {
      
        return this.http.get(this.listURL)
            .map(this.extractData)
            .catch(this.handleError);
    }

logout(): Observable<any> {
        return this.http.get(this.logoutURL)
            .map(this.extractData)
            .catch(this.handleError);
    }
    listByTable(data): Observable<any> {
        return this.http.get(`${this.listByTableURL}/${data}`)
            .map(this.extractData)
            .catch(this.handleError);
    } 
    listByTableMore(data,id): Observable<any> {
        return this.http.get(`${this.listByTableMoreURL}/${data}/${id}`)
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