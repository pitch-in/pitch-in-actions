import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/merge';
import 'rxjs/add/observable/merge';

import { StreamWrapper } from 'app/shared/stream.helpers';

import { Goal } from '../goal.model';

import { GoalsService } from './../goals.service';
import { AddGoalStream } from './add-goal.stream';
import { CloneGoalStream } from './clone-goal.stream';
import { UpdateActionStream } from 'app/action/streams/update-action.stream';

@Injectable()
export class MyGoalsStream implements StreamWrapper<Observable<Goal[]>> {
  $: Observable<Goal[]>;

  constructor(
    goalsService: GoalsService,
    addGoalStream: AddGoalStream,
    cloneGoalStream: CloneGoalStream,
    updateActionStream: UpdateActionStream
  ) {
    const refetchOnUpdate$ = Observable.merge(
      cloneGoalStream.$.flatMap(goalsService.cloneGoal),
      addGoalStream.$.flatMap(goalsService.addGoal),
      updateActionStream.$
    ).flatMap(goalsService.myGoals);

    this.$ = goalsService.myGoals().concat(refetchOnUpdate$);
  }
}
