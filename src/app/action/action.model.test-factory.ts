import * as Factory from 'app/shared/factory.helpers';

import { Action } from 'app/action/action.model';

export const actionFactory = Factory.makeFactory<Action>({
  id: Factory.each(toString),
  name: 'Do a small task',
  notes: '',
  startDaysBefore: 2,
  finishDaysBefore: 1,
  status: 'in-progress'
});

export const emptyActionFactory = Factory.makeFactory<Action>({
  id: Factory.each(toString),
  name: '',
  notes: '',
  startDaysBefore: 0,
  finishDaysBefore: 0,
  status: 'not-started'
});
