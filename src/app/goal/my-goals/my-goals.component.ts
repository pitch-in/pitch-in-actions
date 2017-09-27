import { Component } from '@angular/core';

import { MyGoalsStream } from '../streams/my-goals.stream';

import { AddGoalStream } from '../streams/add-goal.stream';

@Component({
  selector: 'pi-my-goals',
  templateUrl: 'my-goals.component.html'
})
export class MyGoalsComponent {
  constructor(
    public myGoalsStream: MyGoalsStream,
    private addGoalStream: AddGoalStream
  ) {}

  addGoal() {
    this.addGoalStream.$.next();
  }
}
