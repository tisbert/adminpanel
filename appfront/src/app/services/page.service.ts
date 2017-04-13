import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import  { Settings } from '../constants/settings';
import { Page } from '../classes/page';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class PageService {

  constructor(private http: Http) { }

    getPages(): Observable<Page[]> {
        return this.http.get(Settings.API_ENDPOINT + '/page/')
            .map(this.extractData)
            .catch(this.handleError);
    }

    getPage(id: number): Observable<Page[]> {
        return this.http.get(Settings.API_ENDPOINT + '/page/' + id)
            .map(this.extractData)
            .catch(this.handleError);
    }

    deletePage(id: number): Observable<Page[]> {
        return this.http.delete(Settings.API_ENDPOINT + '/page/' + id)
            .map(this.extractData)
            .catch(this.handleError);
    }

    addPage (page: Page){
        return this.http.post(Settings.API_ENDPOINT + '/page/', page)
            .map(this.extractData)
            .catch(this.handleError);
    }

    updatePage (page: Page){
        return this.http.put(Settings.API_ENDPOINT + '/page/', page)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let pages: Page[];
        pages = res.json();
        return pages;
    }

    private handleError (error: Response) {
        return Observable.throw(error || 'Server Error');
    }
}
