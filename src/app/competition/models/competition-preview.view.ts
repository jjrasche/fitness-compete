// import { System } from './system.model';
// import { TestCase } from './test-case.model';
// import { API } from './api.model';

// export class SystemPreview {
//     public systemId: number;
//     public name: string;
//     public baseUrl: string;
//     public numSuccessfulTestCases: number;
//     public numFailedTestCases: number;

//     constructor(sys: System, apis: Array<API>, testCases: Array<TestCase>) {
//         this.systemId = sys.systemId;
//         this.name = sys.name;
//         this.baseUrl = sys.baseUrl;

//         this.setTestCaseInformation(apis, testCases);
//     }

//     private setTestCaseInformation(apis: Array<API>, testCases: Array<TestCase>) {
//         this.numSuccessfulTestCases = apis
//             .filter(api => api.systemId === this.systemId)
//             .reduce((totalSuccesses, api) => {
//                 return totalSuccesses +=
//                     testCases
//                         .filter(tc => tc.apiId === api.apiId)
//                         .reduce((successes, tc) => {
//                             return successes += tc.passed ? 1 : 0;
//                         }, 0);
//             }, 0);

//         this.numFailedTestCases = apis
//             .filter(api => api.systemId === this.systemId)
//             .reduce((totalSuccesses, api) => {
//                 return totalSuccesses +=
//                     testCases
//                         .filter(tc => tc.apiId === api.apiId)
//                         .reduce((successes, tc) => {
//                             return successes += tc.passed ? 0 : 1;
//                         }, 0);
//             }, 0);
//     }
// }

