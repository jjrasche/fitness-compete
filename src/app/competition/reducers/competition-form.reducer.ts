import { Action, combineReducers } from '@ngrx/store';
import { createFormGroupState, formGroupReducer, FormGroupState } from 'ngrx-forms';

import * as fromRoot from '../../reducers/index';
import { Competitor } from '../models/competitor.model';
import { TimeSpan } from '../models/time-span.model';
import { CompetitionFormActions, CompetitionFormActionUnion } from '../actions/competition-form.actions';

export interface FormValue {
  competitors: Array<Competitor>;
  score: string;
  timeSpan: TimeSpan;
}

export interface State extends fromRoot.State {
  competitionForm: {
    formState: FormGroupState<FormValue>;
    submittedValue: FormValue | undefined;
  };
}

export const FORM_ID = 'competitionForm';
export const initialState = createFormGroupState<FormValue>(FORM_ID, {
  competitors: [],
  score: '',
  timeSpan: null
});

export const reducers = combineReducers<State['competitionForm'], any>({
  formState(s = initialState, a: Action) {
    return formGroupReducer(s, a);
  },
  submittedValue(s: FormValue | undefined, a: CompetitionFormActionUnion) {
    switch (a.type) {
      case CompetitionFormActions.SUBMIT_COMPETITION: return a.payload;
      default: return s;
    }
  },
});

export const getFormState = (state: State) => state.competitionForm.formState;
