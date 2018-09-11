import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompetitionsResolver } from './services/competition-resolver.service';
import { CompetitionDetailsComponent } from './components/competition-details/competition-details.component';
import { FitBitAuthGuard } from '../fitbit-auth/services/fit-bit-auth-guard.service';
import { CompetitionFormComponent } from './components/competition/form/competition-form.component';
import { SimpleFormPageComponent } from './components/competition/simple-form/simple-form.component';

const routes: Routes = [
    { path: "fitbitauth", component: CompetitionDetailsComponent, canActivate: [FitBitAuthGuard], },
    {
        canActivate: [],
        component: CompetitionDetailsComponent,
        path: '',
        resolve: {
            systems: CompetitionsResolver
        }
    },
    {
        canActivate: [],
        component: CompetitionFormComponent,
        path: ':id',
        resolve: {
            system: CompetitionsResolver
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CompetitionRoutingModule {
}
