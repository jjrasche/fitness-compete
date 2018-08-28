import { ChangeDetectionStrategy, Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { FormGroupState, ResetAction, SetValueAction } from 'ngrx-forms';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { FormValue, initialState, State } from '../../../reducers/competition-form.reducer';

import * as fromCompetition from '../../../reducers/index';
import * as form from '../../../actions/competition-form.actions';
import { User } from '../../../../shared/models/user';
import { UserService } from '../../../../shared/services/user.service';

@Component({
  selector: 'app-competition-form',
  templateUrl: './competition-form.component.html',
  styleUrls: ['./competition-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompetitionFormComponent {
  formState: Observable<FormGroupState<FormValue>>;
  submittedValue: Observable<FormValue | undefined>;
  users: Observable<Array<User>>;

  constructor(private store: Store<State>,
  private userService: UserService) {
    this.formState = store.pipe(select(fromCompetition.selectCompetitionForm));
    this.submittedValue = store.pipe(select(fromCompetition.selectCompetitionSubmittedValue));
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
}
