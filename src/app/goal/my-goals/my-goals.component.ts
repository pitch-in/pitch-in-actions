import { Component } from '@angular/core';

import { MyGoalsStream } from './../streams/my-goals.stream';

@Component({
  selector: 'pi-my-goals',
  templateUrl: 'my-goals.component.html'
})
export class MyGoalsComponent {
  constructor(public myGoalsStream: MyGoalsStream) {}
}
