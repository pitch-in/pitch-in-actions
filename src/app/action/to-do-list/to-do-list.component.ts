import { Component } from '@angular/core';

import { ToDoListStream } from './../streams/to-do-list.stream';
// import { Action } from '../action.model';

@Component({
  selector: 'pi-to-do-list',
  templateUrl: 'to-do-list.component.html',
  styleUrls: ['to-do-list.component.scss']
})
export class ToDoListComponent {
  constructor(public toDoListStream: ToDoListStream) {}
}
