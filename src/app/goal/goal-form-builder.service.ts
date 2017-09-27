import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

import { isEmpty } from 'ramda';

import { ActionFormBuilderService } from 'app/action/action-form-builder.service';

import { Action } from 'app/action/action.model';
import { Goal } from './goal.model';

@Injectable()
export class GoalFormBuilderService {
  constructor(
    private fb: FormBuilder,
    private actionFormBuilder: ActionFormBuilderService
  ) {}

  build(goal?: Goal): FormGroup {
    const form = this.fb.group({
      id: [''],
      name: [''],
      notes: [''],
      deadline: [''],
      status: [''],
      actions: this.fb.array([])
    });

    if (goal) {
      this.addActionControls(form, goal);
      form.setValue(goal);
    }

    return form;
  }

  private addActionControls(form: FormGroup, goal: Goal): void {
    const actionArray = getActionArray(form);

    if (isEmpty(goal.actions)) return;

    goal.actions.forEach((action: Action) =>
      actionArray.push(this.actionFormBuilder.build(action))
    );
  }
}

export const getActionArray = (form: FormGroup): FormArray =>
  form.get('actions') as FormArray;
