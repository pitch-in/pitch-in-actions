import { Component, Input } from '@angular/core';

import { Goal } from '../goal.model';

@Component({
  selector: 'pi-goal',
  templateUrl: 'goal.component.html',
  styleUrls: ['goal.component.scss']
})
export class GoalComponent {
  @Input() goal: Goal;
  @Input() editing: boolean;
}
