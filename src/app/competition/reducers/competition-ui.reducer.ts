// import { TestCaseActions, TestCaseActionTypes } from '../actions/test-case.actions';
// import { TestCase } from '../models/test-case.model';
// import { createEntityAdapter, EntityAdapter, EntityState, Update } from '@ngrx/entity';
// import { TestRunActionTypes, TestRunActions } from '../actions/test-run.actions';
// import { TestRun } from '../models/test-run.model';

// export interface UIState {
//   testCaseId: number;
//   testRunError: string;
//   dataLoaded: boolean;
//   expanded: boolean;
//   expandedTestCaseError: string;
// }

// export class InitialUIState implements UIState {
//   constructor(
//     public testCaseId: number,
//     public testRunError: string = null,
//     public dataLoaded: boolean = false,
//     public expanded: boolean = false,
//     public expandedTestCaseError: string = null
//   ) {}
// }

// export interface State extends EntityState<UIState> {
// }

// export const adapter: EntityAdapter<UIState> = createEntityAdapter<UIState>({
//   selectId: (testCaseUI: UIState) => testCaseUI.testCaseId,
//   sortComparer: false,
// });

// export const initialState: State = adapter.getInitialState({
// });


// export function reducer(state = initialState, action: TestCaseActionTypes | TestRunActionTypes): State {
//   return TestCaseActions.match(action, {
//     LOAD_TESTCASES: (testCases: Array<TestCase>) => adapter.addMany(testCases.map(tc => new InitialUIState(tc.testCaseId)), state),
//     EXPAND_TESTCASE: (testCase: TestCase) => adapter.updateOne({ id: testCase.testCaseId, changes: { expanded: true, } }, state),
//     CLOSE_TESTCASE: (testCase: TestCase) => adapter.updateOne({ id: testCase.testCaseId, changes: { expanded: false, } }, state),
//     EXPAND_FAILURE_TESTCASE: (error: any) => ({ ...state, expandedTestCaseError: error }),
//     RUN_FAILURE_TESTCASE: (error: any) => ({ ...state, testRunError: error }),
//     LOAD_TESTRUNS: (testRuns: Array<TestRun>) => adapter.updateOne({ id: testRuns[0].testCaseId, changes: { dataLoaded: true, } }, state),
//     default: a => state
//   });
// }

// export const getExpanded = (testCaseId: number) => (state: State) => state[testCaseId].expanded;

// export const {
//   selectIds,
//   selectEntities,
//   selectAll,
//   selectTotal,

// } = adapter.getSelectors();
