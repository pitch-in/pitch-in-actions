import * as Factory from 'factory.ts';

import { Goal } from './goal.model';

import { actionFactory } from 'app/action/action.model.test-factory';

export const goalFactory = Factory.makeFactory<Goal>({
  name: 'Do a thing',
  notes: '',
  deadline: '2017-10-31',
  status: 'not-started',
  actions: actionFactory.buildList(2)
});
