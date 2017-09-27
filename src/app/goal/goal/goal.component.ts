import { ActionFormBuilderService } from 'app/action/action-form-builder.service';
import { Action } from 'app/action/action.model';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Goal } from '../goal.model';
import {
  GoalFormBuilderService,
  getActionArray
} from '../goal-form-builder.service';

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
    private goalFormBuilder: GoalFormBuilderService,
    private actionFormBuilder: ActionFormBuilderService,
    private actionService: ActionService
  ) {}

  ngOnInit() {
    this.form = this.goalFormBuilder.build(this.goal);
  }

  addAction() {
    this.actionService.add(this.goal.id).subscribe(this.renderNewAction);
  }

  removeAction(actionId: string, index: number) {
    this.actionService
      .remove(this.goal.id, actionId)
      .subscribe(() => this.actionArray.removeAt(index));
  }

  get actionArray() {
    return getActionArray(this.form);
  }

  get actionForms() {
    return this.actionArray.controls;
  }

  private renderNewAction = (action: Action): void => {
    const actionForm: FormGroup = this.actionFormBuilder.build(action);

    this.actionArray.push(actionForm);
  };
}
