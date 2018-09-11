
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CompetitionEffects } from './effects/competition.effects';
import { reducers } from './reducers';
import { CompetitionRoutingModule } from './competition-routing.module';

import { CompetitionsResolver } from './services/competition-resolver.service';
import { CompetitionService } from './services/competition.service';
import { FitBitAuthModule } from '../fitbit-auth/fit-bit-auth.module';
import { CompetitionDetailsComponent } from './components/competition-details/competition-details.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { CompetitionFormComponent } from './components/competition/form/competition-form.component';
import { NgrxFormsModule } from 'ngrx-forms';
import { SimpleFormPageComponent } from './components/competition/simple-form/simple-form.component';
import { SharedModule } from '../shared/shared.module';

const COMPONENTS = [CompetitionDetailsComponent, CompetitionFormComponent, SimpleFormPageComponent];
const SERVICES = [CompetitionsResolver, CompetitionService];

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        SharedModule,
        ReactiveFormsModule,
        FitBitAuthModule.forRoot(),
        CompetitionRoutingModule,
        StoreModule.forFeature('competition', reducers),
        EffectsModule.forFeature([CompetitionEffects]),
        NgrxFormsModule,
        FormsModule,
    ],
    declarations: COMPONENTS,
    providers: SERVICES,
})
export class CompetiitonModule { }
