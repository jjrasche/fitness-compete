import { Action, combineReducers } from '@ngrx/store';
import { createFormGroupState, formGroupReducer, FormGroupState, Boxed, box, AddArrayControlAction, RemoveArrayControlAction } from 'ngrx-forms';

import * as fromRoot from '../../reducers/index';
import { Competitor } from '../models/competitor.model';
import { TimeSpan } from '../models/time-span.model';
import { CompetitionFormActions, CompetitionFormActionUnion } from '../actions/competition-form.actions';
import { Calculation } from '../../shared/models/calculation';
import { Factor } from '../../shared/models/factor';
import { MetricType } from "../models/metric-type.enum";

export interface Factor {
  metric: MetricType;
  weight: number;
}

export interface FormValue {
  competitors: Boxed<Array<Competitor>>;
  factors: Array<Factor>;
  timeSpan: TimeSpan;
}

// export interface State extends fromRoot.State {
export interface State {
  competitionForm: {
    formState: FormGroupState<FormValue>;
    array: {
      maxIndex: number;
      options: number[];
    };
    submittedValue: FormValue | undefined;
  };
}

export const FORM_ID = 'competitionForm';
export const initialState = createFormGroupState<FormValue>(FORM_ID, {
  competitors: box([]),
  factors: [
    // { metric: MetricType.TotalCalories, weight: 2500 },
    // { metric: MetricType.ActiveMinutes, weight: 100 },
    new Factor(MetricType.TotalCalories, 2500),      
    new Factor(MetricType.ActiveMinutes, 100),      
  ],
  timeSpan: null
});

const reducers = combineReducers<State['competitionForm'], any>({
  formState(s = initialState, a: Action) {
    return formGroupReducer(s, a);
  },
  array(
    s = { maxIndex: 2, options: [1, 2] },
    a: AddArrayControlAction<boolean> | RemoveArrayControlAction,
  ) {
    switch (a.type) {
      case AddArrayControlAction.TYPE: {
        const maxIndex = s.maxIndex + 1;
        const options = [...s.options];
        // tslint:disable-next-line:no-unnecessary-type-assertion
        options.splice(a.index!, 0, maxIndex);
        return {
          maxIndex,
          options,
        };
      }

      case RemoveArrayControlAction.TYPE: {
        const options = [...s.options];
        // tslint:disable-next-line:no-unnecessary-type-assertion
        options.splice(a.index!, 1);
        return {
          ...s,
          options,
        };
      }

      default:
        return s;
    }
  },
  submittedValue(s: FormValue | undefined, a: CompetitionFormActionUnion) {
    switch (a.type) {
      case CompetitionFormActions.SUBMIT_COMPETITION: return a.payload;
      default: return s;
    }
  },
});

export function reducer(s: State['competitionForm'], a: Action) {
  return reducers(s, a);
}
