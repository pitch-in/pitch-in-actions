import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { StreamWrapper } from 'app/shared/stream.helpers';

import { Goal } from '../goal.model';

import { GoalsService } from './../goals.service';

@Injectable()
export class MyGoalsStream implements StreamWrapper<Observable<Goal[]>> {
  $: Observable<Goal[]>;

  constructor(goalsService: GoalsService) {
    this.$ = goalsService.myGoals();
  }
}
