import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { StreamWrapper } from 'app/shared/stream.helpers';

import { ActionService } from '../action.service';
import { UpdateActionAction } from './update-action.action';

import { Action } from './../action.model';

@Injectable()
export class UpdateActionStream implements StreamWrapper<Observable<Action>> {
  $: Observable<Action>;

  constructor(
    updateActionAction: UpdateActionAction,
    actionService: ActionService
  ) {
    this.$ = updateActionAction.$.flatMap(
      ([parentId, action]: [string, Action]) =>
        actionService.update(parentId, action)
    );
  }
}
