import { Component, Input } from '@angular/core';

import { AddActionAction } from 'app/action/streams/add-action.action';
import { UpdateGoalAction } from '../streams/update-goal.action';
import { CloneGoalStream } from '../streams/clone-goal.stream';

import { Goal } from '../goal.model';

@Component({
  selector: 'pi-goal',
  templateUrl: 'goal.component.html',
  styleUrls: ['goal.component.scss']
})
export class GoalComponent {
  @Input() goal: Goal;
  @Input() editing: boolean;

  constructor(
    private addActionAction: AddActionAction,
    private cloneGoalStream: CloneGoalStream,
    private updateGoalAction: UpdateGoalAction
  ) {}

  addAction() {
    this.addActionAction.$.next(this.goal.id);
  }

  updateGoal(goal: Goal) {
    this.updateGoalAction.$.next(goal);
  }

  removeGoal() {}

  cloneGoal() {
    this.cloneGoalStream.$.next(this.goal.id);
  }
}
