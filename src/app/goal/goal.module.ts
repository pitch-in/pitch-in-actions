import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from 'app/shared/shared.module';
import { ActionModule } from 'app/action/action.module';

import { MyGoalsComponent } from './my-goals/my-goals.component';
import { GoalComponent } from './goal/goal.component';

import { GoalsService } from './goals.service';
import { MyGoalsStream } from './streams/my-goals.stream';

@NgModule({
  imports: [SharedModule, BrowserModule, ActionModule],
  exports: [],
  declarations: [MyGoalsComponent, GoalComponent],
  providers: [GoalsService, MyGoalsStream]
})
export class GoalModule {}
