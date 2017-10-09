import { Component, Input } from '@angular/core';

import { Goal } from '../goal.model';

@Component({
  selector: 'pi-show-goal',
  templateUrl: 'show-goal.component.html',
  styleUrls: ['show-goal.component.scss']
})
export class ShowGoalComponent {
  @Input() goal: Goal;

  constructor() {}
}
