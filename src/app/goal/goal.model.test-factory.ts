import * as Factory from 'factory.ts';

import { Goal } from './goal.model';

import { toString } from 'ramda';

import { actionFactory } from 'app/action/action.model.test-factory';

export const goalFactory = Factory.makeFactory<Goal>({
  id: Factory.each(x => {
    console.log('GOAL ID', x);
    return toString(x);
  }),
  name: 'Do a thing',
  notes: '',
  deadline: '2017-10-31',
  status: 'in-progress',
  actions: actionFactory.buildList(2)
});

export const emptyGoalFactory = Factory.makeFactory<Goal>({
  id: Factory.each(x => toString(x + 2)),
  name: '',
  notes: '',
  deadline: '',
  status: 'not-started',
  actions: []
});
