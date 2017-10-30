import * as Factory from 'app/shared/factory.helpers';

import { Goal } from './goal.model';

import { toString } from 'ramda';

import { actionFactory } from 'app/action/action.model.test-factory';

let id = 1;

function nextId(): string {
  return toString(id++);
}

export const goalFactory = Factory.makeFactory<Goal>({
  id: Factory.each(nextId),
  name: 'Do a thing',
  notes: '',
  deadline: '2017-10-31',
  status: 'in-progress',
  actions: actionFactory.buildList(2)
});

export const emptyGoalFactory = Factory.makeFactory<Goal>({
  id: Factory.each(nextId),
  name: '',
  notes: '',
  deadline: '',
  status: 'not-started',
  actions: []
});
