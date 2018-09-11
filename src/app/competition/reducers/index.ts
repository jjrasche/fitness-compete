import { createSelector, ActionReducerMap, combineReducers } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as fromCompetition from './competion.reducer';
import * as fromCompetitionForm from './competition-form.reducer';
import * as fromSimpleFormReducer from '../components/competition/simple-form/simple-form.reducer';
import { Competition } from '../models/competition.model';
import { Dictionary } from '@ngrx/entity';
import { Competitor } from '../models/competitor.model';

export interface CompetitionState {
    competitions: fromCompetition.State;
    competitionForms: fromCompetitionForm.State;
    // simpleForm: fromSimpleFormReducer.State;
}

export interface State extends fromRoot.State {
    competition: CompetitionState;
}

export const reducers: ActionReducerMap<any> = {
    competitions: fromCompetition.reducer,
    competitionForm: fromCompetitionForm.reducer,
    // simpleForm: fromSimpleFormReducer.reducer
};

export const selectCompetitionState = (state: State) => state.competition.competitions;
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
