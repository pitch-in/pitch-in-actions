import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { buildForm } from 'app/shared/form.helpers';

import { Action } from 'app/action/action.model';
import { Goal } from '../goal.model';

import { goalSchema } from './edit-goal.component.model';

import { CloneGoalStream } from '../streams/clone-goal.stream';

import { ActionService } from 'app/action/action.service';
import { assoc, reject, propEq } from 'ramda';

@Component({
  selector: 'pi-edit-goal',
  templateUrl: 'edit-goal.component.html',
  styleUrls: ['edit-goal.component.scss']
})
export class EditGoalComponent implements OnInit {
  @Input() goal: Goal;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private actionService: ActionService,
    private cloneGoalStream: CloneGoalStream
  ) {}

  ngOnInit() {
    this.form = buildForm(this.fb, goalSchema, this.goal);
  }

  addAction() {
    this.actionService.add(this.goal.id).subscribe(this.renderNewAction);
  }

  cloneGoal() {
    this.cloneGoalStream.$.next(this.goal.id);
  }

  removeAction(action: Action) {
    this.actionService
      .remove(this.goal.id, action.id)
      .subscribe(() => this.renderRemoveAction(action));
  }

  private renderNewAction = (action: Action): void => {
    this.goal.actions.push(action);
  };

  private renderRemoveAction = (action: Action): void => {
    const actions = reject(propEq('id', action.id), this.goal.actions);

    this.goal = assoc('actions', actions, this.goal);
  };
}
