import { goalFactory } from './goal.model.test-factory';
import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

import { Goal } from 'app/goal/goal.model';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

@Injectable()
export class GoalsService {
  constructor(/* private httpClient: HttpClient */) {}

  myGoals(): Observable<Goal[]> {
    return Observable.of(goalFactory.buildList(2));
  }

  updateGoal(goal: Goal): Observable<Goal> {
    return Observable.of(goal);
  }
}
