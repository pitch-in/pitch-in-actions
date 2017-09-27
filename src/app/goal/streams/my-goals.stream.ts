import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/mergeMap';

import { StreamWrapper } from 'app/shared/stream.helpers';

import { Goal } from '../goal.model';

import { GoalsService } from './../goals.service';
import { AddGoalStream } from './add-goal.stream';

@Injectable()
export class MyGoalsStream implements StreamWrapper<Observable<Goal[]>> {
  $: Observable<Goal[]>;

  constructor(goalsService: GoalsService, addGoalStream: AddGoalStream) {
    this.$ = goalsService
      .myGoals()
      .concat(
        addGoalStream.$
          .flatMap(goalsService.addGoal)
          .flatMap(goalsService.myGoals)
      );
  }
}