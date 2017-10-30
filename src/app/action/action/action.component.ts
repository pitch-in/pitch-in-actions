import { RemoveActionAction } from './../streams/remove-action.action';
import { Component, Input } from '@angular/core';

import { Goal } from 'app/goal/goal.model';
import { Action } from '../action.model';
import { UpdateActionAction } from 'app/action/streams/update-action.action';

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

  constructor(
    private removeActionAction: RemoveActionAction,
    private updateActionAction: UpdateActionAction
  ) {}

  updateAction(action: Action) {
    this.updateActionAction.$.next([this.parent.id, action]);
  }

  removeAction(action: Action) {
    this.removeActionAction.$.next([this.parent.id, action]);
  }
}
