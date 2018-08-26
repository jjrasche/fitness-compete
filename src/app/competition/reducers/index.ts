import { createSelector, ActionReducerMap } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as fromCompetition from './competion.reducer';
import { Competition } from '../models/competition.model';
import { Dictionary } from '@ngrx/entity';
import { Competitor } from '../models/competitor.model';

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
export const selectCompetitionsEntities = createSelector(selectCompetitionState, fromCompetition.selectEntities);

export const getSelectedCompetitionId = createSelector(
    selectCompetitionState,
    fromCompetition.getSelectedId
);
export const getSelectedCompetition = createSelector(
    selectCompetitionsEntities,
    getSelectedCompetitionId,
    (competitiions: Dictionary<Competition>, selectedId: number): Competition => {
        return selectedId && competitiions[selectedId];
    }
);
export const getSelectedCompetitors = createSelector(
    selectCompetitionsEntities,
    getSelectedCompetitionId,
    (competitiions: Dictionary<Competition>, selectedId: number): Array<Competitor> => {
        return selectedId && competitiions[selectedId].competitors;
    }
);