import { Competition } from '../models/competition.model';
import { Action } from '@ngrx/store';

import * as fromCompetitionForm from '../reducers/competition-form.reducer';

export enum CompetitionFormActions {
    SUBMIT_COMPETITION = '[CompetitionForm] SUBMIT',
}

export class submit implements Action {
    readonly type = CompetitionFormActions.SUBMIT_COMPETITION;
    constructor(public payload: fromCompetitionForm.FormValue) { }
}

export type CompetitionFormActionUnion = submit;
