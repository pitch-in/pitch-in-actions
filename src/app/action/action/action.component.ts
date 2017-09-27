import { ActionService } from './../action.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import * as moment from 'moment';

import { Action } from '../action.model';
import { Goal } from 'app/goal/goal.model';

import { ActionFormBuilderService } from './../action-form-builder.service';

@Component({
  selector: 'pi-action',
  templateUrl: 'action.component.html',
  styleUrls: ['action.component.scss']
})
export class ActionComponent implements OnInit {
  @Input() actionForm: FormGroup;
  @Input() goal: Goal;

  form: FormGroup;

  constructor(
    private actionFormBuilder: ActionFormBuilderService,
    private actionService: ActionService
  ) {}

  ngOnInit() {
    this.form = this.actionFormBuilder.build(this.action);

    this.form.valueChanges.subscribe((action: Action) =>
      this.actionService.update(this.goal.id, action)
    );
  }

  get action(): Action {
    return this.actionForm.value;
  }

  get goalDeadline(): moment.Moment {
    return moment(this.goal.deadline);
  }

  get startByDate(): string {
    return dymamicDate(this.form, this.goalDeadline, 'startDaysBefore');
  }

  get finishByDate(): string {
    return dymamicDate(this.form, this.goalDeadline, 'finishDaysBefore');
  }
}

function dymamicDate(
  form: FormGroup,
  goalDeadline: moment.Moment,
  dateType: string
): string {
  return goalDeadline.subtract(form.value[dateType], 'days').format('M/D/YYYY');
}
