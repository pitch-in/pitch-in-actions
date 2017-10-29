import { Component, Input, EventEmitter, Output } from '@angular/core';

import * as moment from 'moment';

import { ActionParent, Action, dymamicDate } from '../action.model';

type InputActionParent = ActionParent;
type InputAction = Action;

@Component({
  selector: 'pi-show-action',
  templateUrl: 'show-action.component.html',
  styleUrls: ['show-action.component.scss']
})
export class ShowActionComponent {
  @Input() parent: InputActionParent;
  @Input() action: InputAction;
  @Output() remove = new EventEmitter();
  @Output() edit = new EventEmitter();
  @Output() finish = new EventEmitter();
  @Output() clone = new EventEmitter();

  expanded: boolean;

  toggleExpansion(): void {
    this.expanded = !this.expanded;
  }

  get expandButtonClass(): string {
    return this.expanded ? 'expand-button--expanded' : 'expand-button--closed';
  }

  get finishByDate(): moment.Moment {
    return dymamicDate(this.parent, this.action.finishDaysBefore);
  }
}
