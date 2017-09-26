import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Goal } from '../goal.model';
import {
  GoalFormBuilderService,
  getActionArray
} from '../goal-form-builder.service';

@Component({
  selector: 'pi-goal',
  templateUrl: 'goal.component.html',
  styleUrls: ['goal.component.scss']
})
export class GoalComponent implements OnInit, OnChanges {
  @Input() goal: Goal;

  form: FormGroup;

  constructor(private goalFormBuilder: GoalFormBuilderService) {}

  ngOnInit() {}

  ngOnChanges() {
    console.log('change');
    this.form = this.goalFormBuilder.build(this.goal);
  }

  get actionForms() {
    return getActionArray(this.form).controls;
  }
}
