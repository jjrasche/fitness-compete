import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { map, catchError } from 'rxjs/operators';

import { Observable, throwError } from 'rxjs';

/**
 * Basic crud service for any component that just needs CRUD + getAll.  To use,
 *  inject in your constructor, and set the URL.
 */
@Injectable()
export class CrudService {

    public headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
    public urlRoot = '';
    public urlPath = '';
    public urlSubPath = '';

    /**
     * Constructor, injects HTTP so the calls can be made.
     * @param baseUrl base URL for the REST services.
     * @param http angular HTTP module.
     */
    constructor(@Inject('BaseUrl') public baseUrl: string, public httpClient: HttpClient) {
        this.urlRoot = baseUrl;
    }

    /**
     * Gets all from the service provider at urlRoot.
     */
    public getAll<T>(): Observable<T> {
        const url = this.getFullUrl();
        return this.httpClient.get<T>(url, { headers: this.headers })
            .pipe(
                catchError(this.handleError)
            );
    }

    /**
     * Gets a single object from the service provider at urlRoot.
     * @param seq id to retrieve.
     */
    public get<T>(seq: any): Observable<T> {
        let url: any = this.getFullUrl();
        if (seq) {
            url += `/${seq}`;
        }
        return this.httpClient
            .get<T>(url, { headers: this.headers })
            .pipe(
                catchError(this.handleError)
            );
    }


    /**
     * Creates the object for the service provider at urlRoot
     * @param object object to create.
     * @param pk1 First PK on object being created
     * @param pk2 Second PK on object being created
     *
     * TODO: Refactor Later
     */
    public get2pk<T>(pk1: any, pk2: any = null): Observable<T> {
        let url = `${this.getFullUrl()}/${pk1}/${this.urlSubPath}`;
        if (pk2 !== null) {
            url += `/${pk2}`;
        }
        return this.httpClient
            .get<T>(url, { headers: this.headers })
            .pipe(
                catchError(this.handleError)
            );
    }

    /**
     * Deletes the object from the service provider at urlRoot.
     * @param id id to delete.
     */
    public delete<T>(id: any): Observable<any> {
        let url: any = this.getFullUrl();
        if (id) {
            url += `/${id}`;
        }
        return this.httpClient.delete<T>(url)
            .pipe(
                catchError(this.handleError)
            );
    }

    /**
     * Creates an object for the service provider at urlRoot.
     * @param object
     */
    public create<T>(object: Object, id: any = null): Observable<T> {
        let url: any = this.getFullUrl();
        if (id) {
            url += `/${id}`;
        }
        return this.httpClient
            .post<T>(url, object, { headers: this.headers })
            .pipe(
                catchError(this.handleError)
            );
    }

    /**
     * Updates the object for the service provider at urlRoot
     * @param object object to update.
     */
    public update<T>(object: Object, id: any): Observable<T> {
        let url: any = this.getFullUrl();
        if (id) {
            url += `/${id}`;
        }
        return this.httpClient
            .put<T>(url, object, { headers: this.headers })
            .pipe(
                catchError(this.handleError)
            );
    }

    public getFullUrl(): string {
        return this.urlRoot + this.urlPath;
    }

    /**
     * urlPath setter.
     * @param url url to call.
     */
    public seturlPath(url: string) {
        if (this.urlPath === '') {
            if (url.slice(0, 1) === '/') {
                url = url.slice(1);
            }
            if (url.slice(-1) === '/') {
                url = url.slice(0, -1);
            }
            this.urlPath = url;
        } else {
            throw new Error('Cannot change URL path once set');
        }
    }

    /**
     * urlPath setter.
     * @param url Sub url to call.
     */
    public seturlSubPath(url: string) {
        if (this.urlSubPath === '') {
            if (url.slice(0, 1) === '/') {
                url = url.slice(1);
            }
            if (url.slice(-1) === '/') {
                url = url.slice(0, -1);
            }

            this.urlSubPath = url;

        } else {
            throw new Error('Cannot change URL path once set');
        }
    }

    /**
     * Handles errors from the calls.
     *
     * @param error
     */
    public handleError(error: any) {
        if (error.status === 401) {
            localStorage.removeItem('currentUser');
            localStorage.setItem('SessionExpired', 'true');
        }
        return throwError(error || 'Server error');
    }

    /**
     * Builds url based on arrays
     * @param pks - array of primary keys
     * @param paths - array of url paths
     */
    public buildUrl(pks: any[], paths: any[]): string {
        const urlParts: Array<string> = [];

        paths.forEach((item, index) => {
            urlParts.push(item);
            if (pks[index] != null) {
                urlParts.push(pks[index]);
            }
        });

        return this.urlRoot + urlParts.join('/');
    }

    protected buildHttpParams(queryParams: string[] = [],
                              queryParamValues: string[] = []): HttpParams {
        if (queryParams.length !== queryParamValues.length) {
            throw new Error('Mismatched values for provided query parameters.');
        }

        let httpParams = new HttpParams();

        queryParams.forEach((queryParam, i) => {
            httpParams = httpParams.append(queryParam, queryParamValues[i]);
        });

        return httpParams;
    }
}
