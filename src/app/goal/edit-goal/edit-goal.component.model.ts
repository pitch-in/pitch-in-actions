import { Goal } from '../goal.model';

import { FormSchema, formArray } from 'app/shared/form.helpers';

export const goalSchema: FormSchema<Goal> = {
  name: [''],
  notes: [''],
  deadline: [''],
  status: ['']
};

export const actionArray = formArray('actions');
