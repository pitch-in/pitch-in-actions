import { Component, Input } from '@angular/core';

import { Action } from 'app/action/action.model';

@Component({
  selector: 'pi-action',
  templateUrl: 'action.component.html'
})
export class ActionComponent {
  @Input() action: Action;
  constructor() {}
}
