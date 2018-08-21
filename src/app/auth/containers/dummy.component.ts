import { Component } from '@angular/core';

/*
  Used as a pass through for the fitbit authentication route. 
  Needed a component to tie to the route, but all the work is being done
  in the guard. TODO: find a way to work around Dummy Component
*/
@Component({
selector: 'dummy',
  template: `pass through`,
})
export class DummyComponent {

  constructor() { }

  ngOnInit() { }
}
