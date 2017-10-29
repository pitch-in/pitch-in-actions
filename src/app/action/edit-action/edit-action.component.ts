import {
  Component,
  Input,
  OnInit,
  OnChanges,
  EventEmitter,
  Output
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import * as moment from 'moment';

import { buildForm } from 'app/shared/form.helpers';

import { Action, dymamicDate } from '../action.model';
import { Goal } from 'app/goal/goal.model';
import { actionSchema } from './edit-action.component.model';

import { ActionService } from '../action.service';

@Component({
  selector: 'pi-edit-action',
  templateUrl: 'edit-action.component.html',
  styleUrls: ['edit-action.component.scss']
})
export class EditActionComponent implements OnInit, OnChanges {
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

  constructor(private fb: FormBuilder, private actionService: ActionService) {}

  ngOnInit() {}

  ngOnChanges(value: any) {
    console.log(value);
  }

  submit() {
    console.log(this.parent, this.form.value);
    this.actionService
      .update(this.parent.id, this.form.value)
      .subscribe(this.close);
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
