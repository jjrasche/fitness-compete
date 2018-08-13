// import { Component, OnInit, ViewChild } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { MatTableDataSource, MatPaginator } from '@angular/material';

// import { select, Store } from '@ngrx/store';
// import { Observable } from 'rxjs';
// import { catchError, exhaustMap, map, tap } from 'rxjs/operators';

// import { System } from '../../models/system.model';
// import * as fromTesting from '../../reducers';
// import * as SystemActions from '../../actions/system.actions';
// import { SystemPreview } from '../../models/system-preview.view';

// @Component({
//   selector: 'app-system',
//   templateUrl: './system.component.html',
//   styleUrls: ['./system.component.css']
// })
// export class SystemComponent implements OnInit {
//   public systems: Observable<Array<SystemPreview>>;
//   public columns: string[] = ['name', 'url', 'contact', 'testCases'];
//   public dataSource: MatTableDataSource<System>;

//   @ViewChild(MatPaginator) paginator: MatPaginator;

//   constructor(
//     private route: ActivatedRoute,
//     public router: Router,
//     store: Store<fromTesting.State>
//   ) {
//     this.systems = store.pipe(select(fromTesting.selectSystemPreview));
//   }

//   ngOnInit() {
//   }

//   public navigateToTestCases(system: System) {
//     this.router.navigate([`testing/details/${system.systemId}`]);
//   }

//   public getTestCaseClass(preview: SystemPreview): string {
//     if (preview.numFailedTestCases > 0) {
//       return 'failure';
//     }
//     return 'sucess';
//   }
// }
