import { Update } from '@ngrx/entity';
import { Competition } from '../models/competition.model';
import { Action } from '@ngrx/store';

export enum CompetitionActions {
    LOAD_COMPETITIONS = '[Competition] LOAD',
    ADD_COMPETITION = '[Competition] ADD',
    UPDATE_COMPETITION = '[Competition] UPDATE',
    DELETE_COMPETITION = '[Competition] DELETE',
    SELECT_COMPETITION = '[Competition] SELECT',
}

export class load implements Action {
    readonly type = CompetitionActions.LOAD_COMPETITIONS;
    constructor(public payload: Array<Competition>) { }
}
export class add implements Action {
    readonly type = CompetitionActions.ADD_COMPETITION;
    constructor(public payload: Competition) { }
}
export class update implements Action {
    readonly type = CompetitionActions.UPDATE_COMPETITION;
    constructor(public payload: Update<Competition>) { }
}
export class remove implements Action {
    readonly type = CompetitionActions.DELETE_COMPETITION;
    constructor(public payload: number) { }
}
export class select implements Action {
    readonly type = CompetitionActions.SELECT_COMPETITION;
    constructor(public payload: number) { }
}

export type CompetitionActionUnion =
    | load
    | add
    | update
    | remove;
