import { ActionService } from './../action.service';
import { Component, OnInit } from '@angular/core';

import { Action } from '../action.model';

@Component({
  selector: 'pi-my-actions',
  templateUrl: 'my-actions.component.html',
  styleUrls: ['my-actions.component.scss']
})
export class MyActionsComponent implements OnInit {
  actions: Action[];

  constructor(actionService: ActionService) {
    console.log(actionService);
  }

  ngOnInit() {
    this.actions;
  }
}
