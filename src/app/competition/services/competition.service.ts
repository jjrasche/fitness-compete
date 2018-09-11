import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { take, tap } from "rxjs/operators";

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Competition } from '../models/competition.model';


import { TimeSpan } from '../models/time-span.model';
import { Competitor } from '../models/competitor.model';
import { Goal } from '../models/goal.model';
import { MetricType } from '../models/metric-type.enum';
import { GoalType } from '../models/metric-type.enum.1';


@Injectable()
export class CompetitionService {
    private competitionsCollection: AngularFirestoreCollection<Competition>;
    competitions: Observable<Competition[]>; //  list of objects

    constructor(private afs: AngularFirestore) {
        this.competitionsCollection = afs.collection<Competition>('competitions');
    }

    public getAll(): Observable<Array<Competition>> {
        // return this.competitionsCollection.valueChanges().pipe(take(1));
        
        let competition = new Competition();
        let goals = [new Goal(5, MetricType.ActiveMinutes, 50, GoalType.numericallyAbove)];

        competition.id = 1;
        competition.name = 'fun run';
        competition.timeSpan = new TimeSpan(new Date("08-23-2018"), new Date("08-30-2018"))
        competition.competitors = [new Competitor(5, "jim", goals)];

        var ret = Observable.create((observer: any) => {
            observer.next([competition])
            observer.complete();
        });
        return ret;
    }
}
