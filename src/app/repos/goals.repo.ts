import { Injectable } from '@angular/core';

import { Goal } from 'app/goal/goal.model';

import {
  goalFactory,
  emptyGoalFactory
} from 'app/goal/goal.model.test-factory';

import { assoc, dissoc, map, values, fromPairs, pipe } from 'ramda';

interface GoalHash {
  [id: string]: Goal;
}

@Injectable()
export class GoalsRepo {
  goals: GoalHash;

  constructor() {
    this.goals = pipe(map((goal: Goal) => [goal.id, goal]), fromPairs)(
      goalFactory.buildList(2)
    );
  }

  index(): Goal[] {
    return values(this.goals);
  }

  get(id: string): Goal {
    return this.goals[id];
  }

  post(): Goal {
    const goal = emptyGoalFactory.build();
    this.goals = assoc(goal.id, goal, this.goals);

    return goal;
  }

  put(goal: Goal): Goal {
    this.goals = assoc(goal.id, goal, this.goals);

    return goal;
  }

  delete(id: string): void {
    this.goals = dissoc(id, this.goals);
  }
}

// const ids = (keys as any) as (a: GoalHash) => number[];
// const highest: (a: number[]) => number = last;
// const nextId: (a: GoalHash) => number = pipe(ids, sort(identity), highest, inc);
