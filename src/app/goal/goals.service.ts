import { GoalsRepo } from 'app/repos/goals.repo';
import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

import { Goal } from 'app/goal/goal.model';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

@Injectable()
export class GoalsService {
  constructor(
    private goalsRepo: GoalsRepo /* private httpClient: HttpClient */
  ) {}

  myGoals(): Observable<Goal[]> {
    return Observable.of(this.goalsRepo.index());
  }

  getGoal(id: string): Observable<Goal> {
    return Observable.of(this.goalsRepo.get(id));
  }

  addGoal(): Observable<Goal> {
    return Observable.of(this.goalsRepo.post());
  }

  removeGoal(id: string): Observable<void> {
    return Observable.of(this.goalsRepo.delete(id));
  }

  updateGoal(goal: Goal): Observable<Goal> {
    return Observable.of(this.goalsRepo.put(goal));
  }
}
