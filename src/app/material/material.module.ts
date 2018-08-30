import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { 
  MatButtonModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatGridListModule,
  MatTableModule,
  MatPaginatorModule,
  MatInputModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatBadgeModule,
  MatIconModule,
  MatToolbarModule,
  MatMenuModule,
  MatDividerModule,
  MatCardModule,
  MatSelectModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatSliderModule,
  MatNativeDateModule,
   } from '@angular/material';

import { CustomErrorStateMatcherDirective } from './error-state-matcher';
import { MatListOptionFixDirective } from './mat-list-option-fix';
import { NgrxMatSelectViewAdapter } from './mat-select-view-adapter';

const modules = [
  MatButtonModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatGridListModule,
  MatTableModule,
  MatPaginatorModule,
  MatInputModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatBadgeModule,
  MatIconModule,
  MatToolbarModule,
  FlexLayoutModule,
  MatMenuModule,
  MatDividerModule,
  MatCardModule,
  MatSelectModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSliderModule,
];

@NgModule({
  declarations: [
    NgrxMatSelectViewAdapter,
    CustomErrorStateMatcherDirective,
    MatListOptionFixDirective,
  ],
  imports: modules,
  exports: [
    modules,
    NgrxMatSelectViewAdapter,
    CustomErrorStateMatcherDirective,
    MatListOptionFixDirective
  ]
  ,
}) export class MaterialModule { };
