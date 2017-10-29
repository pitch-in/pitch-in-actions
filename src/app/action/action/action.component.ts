import { Component, Input } from '@angular/core';

import { Goal } from 'app/goal/goal.model';
import { Action } from '../action.model';

type InputAction = Action;
type InputGoal = Goal;

@Component({
  selector: 'pi-action',
  templateUrl: 'action.component.html',
  styleUrls: ['action.component.scss']
})
export class ActionComponent {
  @Input() action: InputAction;
  @Input() parent: InputGoal;
  @Input() editing: boolean;
}
