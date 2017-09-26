import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'app/shared/shared.module';
import { ActionModule } from 'app/action/action.module';

import { MyGoalsComponent } from './my-goals/my-goals.component';
import { GoalComponent } from './goal/goal.component';

import { GoalsService } from './goals.service';
import { GoalFormBuilderService } from './goal-form-builder.service';

import { MyGoalsStream } from './streams/my-goals.stream';

@NgModule({
  imports: [
    SharedModule,
    BrowserModule,
    ActionModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [],
  declarations: [MyGoalsComponent, GoalComponent],
  providers: [GoalsService, MyGoalsStream, GoalFormBuilderService]
})
export class GoalModule {}
