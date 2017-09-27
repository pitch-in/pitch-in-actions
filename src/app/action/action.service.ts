import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

import { ActionRepo } from 'app/repos/action.repo';
import { Action } from 'app/action/action.model';

@Injectable()
export class ActionService {
  constructor(
    private actionRepo: ActionRepo /* private httpClient: HttpClient */
  ) {}

  add(goalId: string): Observable<Action> {
    return Observable.of(this.actionRepo.post(goalId));
  }

  remove(goalId: string, actionId: string): Observable<void> {
    return Observable.of(this.actionRepo.delete(goalId, actionId));
  }

  update(goalId: string, action: Action): Observable<Action> {
    return Observable.of(this.actionRepo.put(goalId, action));
  }
}
