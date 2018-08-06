import { Inject, Injectable } from '@angular/core';
import { CrudService } from '../../core/services/crud.service';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { TestRun } from '../models/test-run.model';


@Injectable()
export class TestCaseService extends CrudService {

    constructor(
        @Inject('BaseUrl') public baseUrl: string,
        public httpClient: HttpClient) {
        super(baseUrl, httpClient);
        this.seturlPath('TestCases');
    }

    public runTestCase(testCaseId: number): Observable<TestRun>  {
        return this.get<TestRun>(`run/${testCaseId}`);
    }

    public getTestRunsByTestCaseId(testCaseId: number): Observable<Array<TestRun>> {
        return this.get<Array<TestRun>>(`${testCaseId}/testruns`);
    }
}
