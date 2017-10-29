import { Injectable } from '@angular/core';

import { Goal } from 'app/goal/goal.model';
import { Action } from 'app/action/action.model';

import { emptyActionFactory } from 'app/action/action.model.test-factory';

import {
  assoc,
  chain,
  concat,
  equals,
  findIndex,
  pipe,
  prop,
  remove,
  update
} from 'ramda';
import { GoalsRepo } from 'app/repos/goals.repo';

@Injectable()
export class ActionRepo {
  constructor(private goalRepo: GoalsRepo) {}

  index(): Action[] {
    return allActions(this.goalRepo.index());
  }

  post(goalId: string): Action {
    let goal = this.goalRepo.get(goalId);
    let actions = goal.actions;

    const action = emptyActionFactory.build();

    actions = concat(actions, [action]);

    goal = assoc('actions', actions, goal);
    this.goalRepo.put(goal);

    return action;
  }

  put(goalId: string, action: Action): Action {
    let goal = this.goalRepo.get(goalId);
    let actions = goal.actions;

    const actionIndex = findIndex(pipe(prop('id'), equals(action.id)))(actions);

    actions = update(actionIndex, action, actions);

    goal = assoc('actions', actions, goal);
    this.goalRepo.put(goal);

    console.log('action PUT', goal);

    return action;
  }

  delete(goalId: string, actionId: string): void {
    let goal = this.goalRepo.get(goalId);
    let actions = goal.actions;

    const actionIndex = findIndex(pipe(prop('id'), equals(actionId)))(actions);

    actions = remove(actionIndex, 1, actions);

    goal = assoc('actions', actions, goal);
    this.goalRepo.put(goal);
  }
}

const allActions: (a: Goal[]) => Action[] = chain(prop('actions'));
