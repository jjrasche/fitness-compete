import { CompetitionActions, CompetitionActionUnion } from '../actions/competition.actions';

import { createEntityAdapter, EntityAdapter, EntityState, Update } from '@ngrx/entity';
import { Competition } from '../models/competition.model';


export interface State extends EntityState<Competition> {
  selectedCompetitionId: number | null;
}

export const adapter: EntityAdapter<Competition> = createEntityAdapter<Competition>({
  selectId: (competition: Competition) => competition.id,
  sortComparer: false,
});

export const initialState: State = adapter.getInitialState({
  selectedCompetitionId: null,
});

export function reducer(state = initialState, action: CompetitionActionUnion): State {
  switch (action.type) {
    case CompetitionActions.LOAD_COMPETITIONS: return adapter.addMany(action.payload, state);
    case CompetitionActions.ADD_COMPETITION: return adapter.addOne(action.payload, state);
    case CompetitionActions.UPDATE_COMPETITION: return adapter.updateOne(action.payload, state);
    case CompetitionActions.DELETE_COMPETITION: return adapter.removeOne(action.payload, state);
    case CompetitionActions.SELECT_COMPETITION: return { ...state, selectedCompetitionId: action.payload };
    default: return state;
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,

} = adapter.getSelectors();

export const getSelectedId = (state: State) => state.selectedCompetitionId;

