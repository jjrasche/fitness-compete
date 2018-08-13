import { TestCaseActions, TestCaseActionTypes } from '../actions/test-case.actions';
import { SystemActions, SystemActionTypes } from '../actions/system.actions';

import { createEntityAdapter, EntityAdapter, EntityState, Update } from '@ngrx/entity';
import { TestCase } from '../models/test-case.model';


export interface State extends EntityState<TestCase> {
}

export const adapter: EntityAdapter<TestCase> = createEntityAdapter<TestCase>({
  selectId: (testCase: TestCase) => testCase.testCaseId,
  sortComparer: false,
});

export const initialState: State = adapter.getInitialState({
});

export function reducer(state = initialState, action: TestCaseActionTypes): State {
  return TestCaseActions.match(action, {
    LOAD_TESTCASES: (testCases: Array<TestCase>) => adapter.addMany(testCases, state),
    ADD_TESTCASE: (testCase: TestCase) => adapter.addOne(testCase, state),
    UPDATE_TESTCASE: (updatedTestCase: Update<TestCase>) => adapter.updateOne(updatedTestCase, state),
    DELETE_TESTCASE: (testCaseId: number) => adapter.removeOne(testCaseId, state),
    default: a => state
  });
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,

} = adapter.getSelectors();
