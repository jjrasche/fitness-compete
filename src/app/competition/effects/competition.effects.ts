import { Injectable } from '@angular/core';

import { Actions, Effect } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap, filter, first } from 'rxjs/operators';

import * as fromCompetition from '../reducers';

@Injectable()
export class CompetitionEffects {

    constructor(
        private actions: Actions,
        private store: Store<fromCompetition.State>
    ) { }
}
