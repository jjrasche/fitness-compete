import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, take } from 'rxjs/operators';

import * as competition from '../actions/competition.actions';
import { Competition } from '../models/competition.model';
import { CompetitionService } from './competition.service';

@Injectable()
export class CompetitionsResolver {

    constructor(
        protected competitionService: CompetitionService, 
        protected store: Store<any>) {
    }

    public resolve(route: ActivatedRouteSnapshot, state: Object): Observable<Competition>  {
        return this.competitionService.getAll().pipe(
            tap((competitions: any) => this.store.dispatch(new competition.load(competitions)))
        );
    }
}
