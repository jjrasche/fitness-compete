import { ChangeDetectionStrategy, Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { FormGroupState, ResetAction, SetValueAction } from 'ngrx-forms';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { FormValue, initialState, State } from '../../../reducers/competition-form.reducer';

@Component({
  selector: 'app-competition-form',
  templateUrl: './competition-form.component.html',
  styleUrls: ['./competition-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompetitionFormComponent {
  formState: Observable<FormGroupState<FormValue>>;
  submittedValue: Observable<FormValue | undefined>;

  constructor(private store: Store<State>) {
    this.formState = store.pipe(select(s => s.simpleForm.formState));
    // this.competition = store.pipe(select(fromCompetition.getSelectedCompetition));

    this.submittedValue = store.pipe(select(s => s.simpleForm.submittedValue));
  }

  reset() {
    this.store.dispatch(new SetValueAction(initialState.id, initialState.value));
    this.store.dispatch(new ResetAction(initialState.id));
  }

  submit() {
    this.formState$.pipe(
      take(1),
      map(fs => new SetSubmittedValueAction(fs.value)),
    ).subscribe(this.store);
  }
}
