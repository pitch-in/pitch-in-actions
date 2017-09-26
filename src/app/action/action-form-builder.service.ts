import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Action } from './action.model';

@Injectable()
export class ActionFormBuilderService {
  constructor(private fb: FormBuilder) {}

  build(action?: Action): FormGroup {
    const form = this.fb.group({
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
