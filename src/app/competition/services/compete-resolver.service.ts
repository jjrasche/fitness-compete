// import { Inject, Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

// import { Store } from '@ngrx/store';
// import { Observable } from 'rxjs';
// import { tap } from 'rxjs/operators';

// import { System } from '../models/system.model';
// import { SystemActions } from '../actions/system.actions';
// import { APIActions } from '../actions/api.actions';
// import { TestCaseActions } from '../actions/test-case.actions';
// import { CrudService } from '../../core/services/crud.service';

// @Injectable()
// export class TestDetailResolver extends CrudService implements Resolve<Array<System>>  {

//     constructor(
//         @Inject('BaseUrl') public baseUrl: string,
//         public httpClient: HttpClient,
//         private store: Store<any>) {
//         super(baseUrl, httpClient);
//         this.seturlPath('Systems');
//     }

//     public resolve(route: ActivatedRouteSnapshot, state: Object): Observable<Array<System>>  {
//         return this.getAll<any>().pipe(
//             tap((testDetail: any) => this.store.dispatch(APIActions.LOAD_APIS(testDetail.apIs))),
//             tap((testDetail: any) => this.store.dispatch(SystemActions.LOAD_SYSTEMS(testDetail.systems))),
//             tap((testDetail: any) => this.store.dispatch(TestCaseActions.LOAD_TESTCASES(testDetail.testCases))),
//         );
//     }
// }
