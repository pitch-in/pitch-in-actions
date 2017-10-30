import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { StreamWrapper } from 'app/shared/stream.helpers';

import { Action } from './../action.model';

import { ActionService } from 'app/action/action.service';

@Injectable()
export class ToDoListStream implements StreamWrapper<Observable<Action[]>> {
  $: Observable<Action[]>;

  constructor(actionService: ActionService) {
    this.$ = actionService.index();
  }
}
