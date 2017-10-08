import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Action } from './action.model';

import { FormSchema } from 'app/shared/form.helpers';

export const actionSchema: FormSchema<Action> = {
  id: [''],
  name: [''],
  notes: [''],
  startDaysBefore: [''],
  finishDaysBefore: [''],
  status: ['']
};

@Injectable()
export class ActionFormBuilderService {
  constructor(private fb: FormBuilder) {}

  build(action?: Action): FormGroup {
    const form = this.fb.group({
      id: [''],
      name: [''],
      notes: [''],
      startDaysBefore: [''],
      finishDaysBefore: [''],
      status: ['']
    });

    if (action) {
      form.setValue(action);
    }

    return form;
  }
}
