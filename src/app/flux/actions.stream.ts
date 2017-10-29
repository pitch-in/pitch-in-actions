import { Observable } from 'rxjs/Observable';
import { SubjectWrapper } from 'app/shared/stream.helpers';

import 'rxjs/add/operator/filter';

interface Action1 {
  payload: '';
  type: '1';
}

interface Action2 {
  payload: '';
  type: '2';
}

type RegisteredActions = Action1 | Action2;

export class FluxActionsStream extends SubjectWrapper<RegisteredActions> {}

function fluxFilter<T extends RegisteredActions>(
  actions: FluxActionsStream,
  type: T['type']
): Observable<T> {
  return actions.$.filter(a => a.type === type);
}
