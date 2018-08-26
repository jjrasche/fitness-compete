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
    selector: 'app-competition-details',
    templateUrl: './competition-details.component.html',
    styleUrls: ['./competition-details.component.css']
})
export class CompetitionDetailsComponent implements OnInit {
    public competition: Observable<Competition>;
    public competitions: Observable<Array<Competition>>;
    public columns: string[] = ['name', 'score'];
    public dataSource: MatTableDataSource<Competitor>;

    constructor(
        private route: ActivatedRoute,
        public router: Router,
        public store: Store<fromCompetition.State>
    ) {
        this.competition = store.pipe(select(fromCompetition.getSelectedCompetition));
        this.competitions = store.pipe(select(fromCompetition.selectAllCompetitions));
    }

    ngOnInit() {
    }

    public addCompetition() {
        let newCompetition = new Competition();
        // TODO: figure out how to get next id... do I need to do this with nosql?
        newCompetition.id = getRndInteger(10,100000);

        this.store.dispatch(new competition.add(newCompetition));
        this.store.dispatch(new competition.select(newCompetition.id));
        this.router.navigate([`competition/${newCompetition.id}`]);
    }

    public selectCompetition(competitionId: number) {
        this.store.dispatch(new competition.select(competitionId));
    }
}


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}