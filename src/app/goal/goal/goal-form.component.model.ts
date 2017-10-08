import { Goal } from '../goal.model';

import { FormSchema, formArray } from 'app/shared/form.helpers';
import { actionSchema } from 'app/action/action/action.component.model';

export const goalSchema: FormSchema<Goal> = {
  id: [''],
  name: [''],
  notes: [''],
  deadline: [''],
  status: [''],
  actions: {
    type: 'array',
    schema: actionSchema
  }
};

export const actionArray = formArray('actions');
