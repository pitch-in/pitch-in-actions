import { SearchMyGoalsAction } from './../streams/search-my-goals.action';
import { Component, OnInit } from '@angular/core';

import { MyGoalsStream } from '../streams/my-goals.stream';

import { AddGoalStream } from '../streams/add-goal.stream';

@Component({
  selector: 'pi-my-goals',
  templateUrl: 'my-goals.component.html',
  styleUrls: ['my-goals.component.scss']
})
export class MyGoalsComponent implements OnInit {
  constructor(
    private searchMyGoalsAction: SearchMyGoalsAction,
    public myGoalsStream: MyGoalsStream,
    private addGoalStream: AddGoalStream
  ) {}

  ngOnInit() {
    setTimeout(() => this.searchMyGoalsAction.$.next());
  }

  addGoal() {
    this.addGoalStream.$.next();
  }
}
