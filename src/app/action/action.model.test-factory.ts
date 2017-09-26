import * as Factory from 'factory.ts';

import { Action } from 'app/action/action.model';

export const actionFactory = Factory.makeFactory<Action>({
  name: 'Do a small task',
  notes: '',
  startDaysBefore: 2,
  finishDaysBefore: 1,
  status: 'not-started'
});
