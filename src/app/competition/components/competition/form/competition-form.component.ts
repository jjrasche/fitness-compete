import { ChangeDetectionStrategy, Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { FormGroupState, ResetAction, SetValueAction, AddArrayControlAction, RemoveArrayControlAction } from 'ngrx-forms';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { FormValue, initialState, State } from '../../../reducers/competition-form.reducer';

import * as fromCompetition from '../../../reducers/index';
import * as form from '../../../actions/competition-form.actions';
import { User } from '../../../../shared/models/user';
import { UserService } from '../../../../shared/services/user.service';
import { MetricType, Metrics } from '../../../models/metric-type.enum';

@Component({
  selector: 'app-competition-form',
  templateUrl: './competition-form.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompetitionFormComponent {
  public json = JSON;
  public metricTypes = MetricType;
  public metrics = Metrics;

  formState: Observable<FormGroupState<FormValue>>;
  submittedValue: Observable<FormValue | undefined>;
  users: Observable<Array<User>>;

  constructor(private store: Store<State>,
  private userService: UserService) {
    // TODO: why is the store not structured correctly  s.competitionForm.formState
    this.formState = store.pipe(select(s => {
      return (s as any).competition.competitionForm.formState
    }));
    this.submittedValue = store.pipe(select(s => {
      return (s as any).competition.competitionForm.submittedValue
    }));
    this.users = this.userService.getAvailableUsers();
  }

  reset() {
    this.store.dispatch(new SetValueAction(initialState.id, initialState.value));
    this.store.dispatch(new ResetAction(initialState.id));
  }

  submit() {
    // this.store.dispatch(new testCase.close(this.testCase));

    this.formState.pipe(
      take(1),
      map(fs => {
        return new form.submit(fs.value)
      }),
    ).subscribe(this.store);
  }

  addFactor(index: number) {
    this.formState.pipe(
      take(1),
      map((form: FormGroupState<FormValue>) => {
        let firstValue = form.controls.factors.value[0];
        return new AddArrayControlAction(form.controls.factors.id, firstValue, index)
      }),
    ).subscribe(this.store);
  }

  removeFactor(index: number) {
    this.formState.pipe(
      take(1),
      map((form: FormGroupState<FormValue>) => {
        return new RemoveArrayControlAction(form.controls.factors.id, index)
      }),
    ).subscribe(this.store);
  }
}
