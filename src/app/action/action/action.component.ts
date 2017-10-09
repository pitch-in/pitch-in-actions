import { Component, Input } from '@angular/core';

import { Goal } from 'app/goal/goal.model';
import { Action } from '../action.model';

@Component({
  selector: 'pi-action',
  templateUrl: 'action.component.html',
  styleUrls: ['action.component.scss']
})
export class ActionComponent {
  @Input() action: Action;
  @Input() parent: Goal;
  @Input() editing: boolean;
}
