import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { blog } from './../../../config';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import axios from 'axios'
@Injectable()

export class blogService {
private tagsURL: string = blog.tags;
private articlesURL: string = blog.articles;
private viewURL: string = blog.view;

    constructor(private http: Http) { }

getTagList(data: any): Observable<any> {
        let headers = new Headers({ 'User-Name':'Alice' });
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.tagsURL, data, options)
            .map(this.extractData)
            .catch(this.handleError);
    }
    getView(data: any): Observable<any> {
        let headers = new Headers({ 'User-Name':'Alice' });
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.viewURL, data, options)
            .map(this.extractData)
            .catch(this.handleError);
    }
getArticleList(data: any): Observable<any> {
        let headers = new Headers({ 'User-Name':'Alice' });
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.articlesURL, data, options)
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