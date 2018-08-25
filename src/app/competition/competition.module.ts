
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CompetitionEffects } from './effects/competition.effects';
import { reducers } from './reducers';
import { CompetitionRoutingModule } from './competition-routing.module';
import { ComponentsModule } from './components/components.module';

import { CompetitionsResolver } from './services/competition-resolver.service';
import { CompetitionService } from './services/competition.service';
import { FitBitAuthModule } from '../fitbit-auth/fit-bit-auth.module';
import { CompetitionDetailsComponent } from './components/competition/competition-details.component';
import { CommonModule } from '@angular/common';

const COMPONENTS = [CompetitionDetailsComponent];
const SERVICES = [CompetitionsResolver, CompetitionService];

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FitBitAuthModule.forRoot(),
        CompetitionRoutingModule,
        ComponentsModule,
        StoreModule.forFeature('competitions', reducers),
        EffectsModule.forFeature([CompetitionEffects]),
    ],
    declarations: COMPONENTS,
    providers: SERVICES,
})
export class CompetiitonModule { }
