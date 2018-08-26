import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTableDataSource, MatPaginator } from '@angular/material';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';

import * as fromCompetition from '../../reducers';
import { Competition } from '../../models/competition.model';
import * as competition from '../../actions/competition.actions';
import { Competitor } from '../../models/competitor.model';

@Component({
    selector: 'app-competition',
    templateUrl: './competition.component.html',
    styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {
    public competition: Observable<Competition>;

    constructor(
        private route: ActivatedRoute,
        public router: Router,
        public store: Store<fromCompetition.State>
    ) {
        this.competition = store.pipe(select(fromCompetition.getSelectedCompetition));
    }

    ngOnInit() {
    }
}
