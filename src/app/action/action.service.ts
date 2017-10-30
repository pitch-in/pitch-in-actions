import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

import { ActionRepo } from 'app/repos/action.repo';
import { Action } from 'app/action/action.model';
import { always } from 'ramda';

@Injectable()
export class ActionService {
  constructor(
    private actionRepo: ActionRepo /* private httpClient: HttpClient */
  ) {}

  index = (): Observable<Action[]> => Observable.of(this.actionRepo.index());

  add = (goalId: string): Observable<Action> =>
    Observable.of(this.actionRepo.post(goalId));

  remove = (action: Action): Observable<Action> =>
    Observable.of(this.actionRepo.delete(action)).map(always(action));

  update = (action: Action): Observable<Action> =>
    Observable.of(this.actionRepo.put(action));
}
