import {
  createSelector,
  createFeatureSelector,
  createSelectorFactory,
  ActionReducerMap,
  MemoizedSelector,
  MemoizeFn,
  MemoizedProjection,
} from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as fromSystem from './system.reducer';
import * as fromAPI from './api.reducer';
import * as fromTestCase from './test-case.reducer';
import * as fromTestCaseUI from './test-case-ui.reducer';
import * as fromTestRun from './test-run.reducer';
import { System } from '../models/system.model';
import { SystemPreview } from '../models/system-preview.view';
import { TestCase } from '../models/test-case.model';
import { API } from '../models/api.model';
import { TestRun } from '../models/test-run.model';
import { Dictionary } from '@ngrx/entity/src/models';
import { APIPreview } from '../models/api-preview.view';
import { TestRunView } from '../models/test-run.view';


export interface TestingState {
  systems: fromSystem.State;
  APIs: fromAPI.State;
  testCases: fromTestCase.State;
  testCaseUI: fromTestCaseUI.State;
  testRuns: fromTestRun.State;
}

export interface State extends fromRoot.State {
  testing: TestingState;
}

export const reducers: ActionReducerMap<TestingState> = {
  systems: fromSystem.reducer,
  APIs: fromAPI.reducer,
  testCases: fromTestCase.reducer,
  testCaseUI: fromTestCaseUI.reducer,
  testRuns: fromTestRun.reducer,
};

export const selectTestingState = (state: State) => state.testing;
export const selectSystemState = (state: State) => state.testing.systems;
export const selectAPIState = (state: State) => state.testing.APIs;
export const selectTestCaseState = (state: State) => state.testing.testCases;
export const selectTestRunState = (state: State) => state.testing.testRuns;
export const selectTestCaseUIState = (state: State) => state.testing.testCaseUI;
// export const selectRouterState = (rootState: fromRoot.State) => rootState.router;

export const selectAllSystems = createSelector(selectSystemState, fromSystem.selectAll);
export const selectAllAPIs = createSelector(selectAPIState, fromAPI.selectAll);
export const selectAllTestCases = createSelector(selectTestCaseState, fromTestCase.selectAll);
export const selectAllTestRuns = createSelector(selectTestRunState, fromTestRun.selectAll);
export const selectTestCaseUIEntities = createSelector(selectTestCaseUIState, fromTestCaseUI.selectEntities);
// export const selectRouterNavigationId = createSelector(selectRouterState, fromRoot.getRouterState);

export const selectSystemPreview = createSelector(
  selectAllSystems,
  selectAllAPIs,
  selectAllTestCases,
  (systems: Array<System>, apis: Array<API>, testCases: Array<TestCase>): Array<SystemPreview> => {
    return systems.map(sys => new SystemPreview(sys, apis, testCases));
  }
);
export const selectAPIPreview = createSelector(
  selectAllAPIs,
  selectAllTestCases,
  // fromRoot.selectRouterNavigationId,
  // (apis: Array<API>, testCases: Array<TestCase>, systemId: number) => {
  (apis: Array<API>, testCases: Array<TestCase>) => {
    // TODO: should there be assertion here that I am on a certain page,
    // so the navigationId represents a systemId?
    return apis
      .filter(api => api.systemId === 1)
      .map(api => new APIPreview(api, testCases));
  }
);

// paramertized selectors

export const selectTestCasesByAPI = (apiId: number) =>  createSelector(
  selectAllTestCases,
  (testCases: Array<TestCase>) => {
    return testCases.filter(tc => tc.apiId === apiId);
  }
);

export const selectTestCaseUI = (testCaseId: number) => createSelector(
  selectTestCaseUIEntities,
  (state: Dictionary<fromTestCaseUI.UIState>) => {
    return state && state[testCaseId];
  }
);

export const selectTestRunViewsByTestCase = (testCaseId: number) => createSelector(
  selectAllTestRuns,
  (testRuns: Array<TestRun>) => {
    return testRuns
      .filter(tr => tr.testCaseId === testCaseId)
      .map(tr => new TestRunView(tr));
  }
);

