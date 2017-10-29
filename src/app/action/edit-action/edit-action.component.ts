import { UpdateActionAction } from './../streams/update-action.action';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import * as moment from 'moment';

import { buildForm } from 'app/shared/form.helpers';

import { Action, dymamicDate } from '../action.model';
import { Goal } from 'app/goal/goal.model';
import { actionSchema } from './edit-action.component.model';

@Component({
  selector: 'pi-edit-action',
  templateUrl: 'edit-action.component.html',
  styleUrls: ['edit-action.component.scss']
})
export class EditActionComponent implements OnInit {
  @Input()
  set action(action: Action) {
    console.log('SET');
    this.form = buildForm(this.fb, actionSchema, action);
  }
  get action(): Action {
    return this.form.value;
  }

  @Input() parent: Goal;
  @Output() close = new EventEmitter();
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private updateActionAction: UpdateActionAction
  ) {}

  ngOnInit() {}

  submit() {
    console.log(this.parent, this.action);
    this.updateActionAction.$.next([this.parent.id, this.action]);
  }

  get goalDeadline(): moment.Moment {
    return moment(this.parent.deadline);
  }

  get startByDate(): moment.Moment {
    return dymamicDate(this.parent, this.action.startDaysBefore);
  }

  get finishByDate(): moment.Moment {
    return dymamicDate(this.parent, this.action.finishDaysBefore);
  }
}
