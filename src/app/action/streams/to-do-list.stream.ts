import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { StreamWrapper } from 'app/shared/stream.helpers';

import { ActionWithContext } from './../action.model';

import { ActionService } from 'app/action/action.service';

@Injectable()
export class ToDoListStream
  implements StreamWrapper<Observable<ActionWithContext[]>> {
  $: Observable<ActionWithContext[]>;

  constructor(actionService: ActionService) {
    this.$ = actionService.toDoList();
  }
}
