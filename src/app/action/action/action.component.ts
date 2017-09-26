import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import * as moment from 'moment';

import { Action } from '../action.model';
import { Goal } from 'app/goal/goal.model';

@Component({
  selector: 'pi-action',
  templateUrl: 'action.component.html',
  styleUrls: ['action.component.scss']
})
export class ActionComponent {
  @Input() actionForm: FormGroup;
  @Input() goal: Goal;

  constructor() {}

  get action(): Action {
    return this.actionForm.value;
  }

  get goalDeadline(): moment.Moment {
    return moment(this.goal.deadline);
  }

  get startByDate(): moment.Moment {
    return this.goalDeadline.subtract(this.action.startDaysBefore, 'days');
  }
}
