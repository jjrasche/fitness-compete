import { createSelector, ActionReducerMap } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as fromCompetition from './competion.reducer';
import { Competition } from '../models/competition.model';

export interface CompetitionState {
    competitions: fromCompetition.State;
}

export interface State extends fromRoot.State {
    competitions: CompetitionState;
}

export const reducers: ActionReducerMap<CompetitionState> = {
    competitions: fromCompetition.reducer,
};

export const selectCompetitionState = (state: State) => state.competitions.competitions;
export const selectAllCompetitions = createSelector(selectCompetitionState, fromCompetition.selectAll);
export const selectACompetitions = createSelector(selectCompetitionState, fromCompetition.selectAll);


export const getSelectedCompetitionId = createSelector(
    selectCompetitionState,
    fromCompetition.getSelectedId
);
export const getSelectedCompetition = createSelector(
    selectAllCompetitions,
    getSelectedCompetitionId,
    (competitiions: Array<Competition>, selectedId: number) => {
        return selectedId && competitiions[selectedId];
    }
);