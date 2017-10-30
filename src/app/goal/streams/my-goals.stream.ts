import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/merge';
import 'rxjs/add/observable/merge';

import { StreamWrapper } from 'app/shared/stream.helpers';

import { Goal } from '../goal.model';

import { GoalsService } from './../goals.service';

import { UpdateActionStream } from 'app/action/streams/update-action.stream';
import { UpdateGoalStream } from './update-goal.stream';

@Injectable()
export class MyGoalsStream implements StreamWrapper<Observable<Goal[]>> {
  $: Observable<Goal[]>;

  constructor(
    goalsService: GoalsService,
    updateGoalStream: UpdateGoalStream,
    updateActionStream: UpdateActionStream
  ) {
    const refetchOnUpdate$ = Observable.merge(
      updateGoalStream.$,
      updateActionStream.$
    ).flatMap(goalsService.myGoals);

    this.$ = goalsService.myGoals().concat(refetchOnUpdate$);
  }
}
