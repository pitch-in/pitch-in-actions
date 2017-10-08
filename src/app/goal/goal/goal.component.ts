import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { buildForm } from 'app/shared/form.helpers';

import { Action } from 'app/action/action.model';
import { actionSchema } from 'app/action/action/action.component.model';
import { Goal } from '../goal.model';
import { goalSchema, actionArray } from './goal-form.component.model';

import { CloneGoalStream } from '../streams/clone-goal.stream';

import { ActionService } from 'app/action/action.service';

@Component({
  selector: 'pi-goal',
  templateUrl: 'goal.component.html',
  styleUrls: ['goal.component.scss']
})
export class GoalComponent implements OnInit {
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

  removeAction(actionId: string, index: number) {
    this.actionService
      .remove(this.goal.id, actionId)
      .subscribe(() => this.actionArray.removeAt(index));
  }

  get actionArray() {
    return actionArray(this.form);
  }

  get actionForms() {
    return this.actionArray.controls;
  }

  private renderNewAction = (action: Action): void => {
    const actionForm: FormGroup = buildForm(this.fb, actionSchema, action);

    this.actionArray.push(actionForm);
  };
}
