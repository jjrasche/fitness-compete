// import {
//   createSelector,
//   createFeatureSelector,
//   ActionReducerMap,
// } from '@ngrx/store';
// import * as fromRoot from '../../reducers';
// import * as fromTestCase from './competion.reducer';
// import * as fromTestCaseUI from './competition-ui.reducer';
// import { System } from '../models/competition.model';
// import { SystemPreview } from '../models/competition-preview.view';


// export interface TestingState {
//   testCases: fromTestCase.State;
//   testCaseUI: fromTestCaseUI.State;
// }

// export interface State extends fromRoot.State {
//   testing: TestingState;
// }

// export const reducers: ActionReducerMap<TestingState> = {
//   testCases: fromTestCase.reducer,
//   testCaseUI: fromTestCaseUI.reducer,
// };

// export const selectTestingState = (state: State) => state.testing;
// export const selectTestCaseState = (state: State) => state.testing.testCases;
// export const selectTestCaseUIState = (state: State) => state.testing.testCaseUI;

// export const selectAllTestCases = createSelector(selectTestCaseState, fromTestCase.selectAll);
// export const selectTestCaseUIEntities = createSelector(selectTestCaseUIState, fromTestCaseUI.selectEntities);

// // export const selectTestCasesByAPI = (apiId: number) =>  createSelector(
// //   selectAllTestCases,
// //   (testCases: Array<TestCase>) => {
// //     return testCases.filter(tc => tc.apiId === apiId);
// //   }
// // );

// // export const selectTestCaseUI = (testCaseId: number) => createSelector(
// //   selectTestCaseUIEntities,
// //   (state: Dictionary<fromTestCaseUI.UIState>) => {
// //     return state && state[testCaseId];
// //   }
// // );

// // export const selectTestRunViewsByTestCase = (testCaseId: number) => createSelector(
// //   selectAllTestRuns,
// //   (testRuns: Array<TestRun>) => {
// //     return testRuns
// //       .filter(tr => tr.testCaseId === testCaseId)
// //       .map(tr => new TestRunView(tr));
// //   }
// // );

