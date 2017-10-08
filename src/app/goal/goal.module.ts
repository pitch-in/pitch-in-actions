import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'app/shared/shared.module';
import { ActionModule } from 'app/action/action.module';

import { MyGoalsComponent } from './my-goals/my-goals.component';
import { GoalComponent } from './goal/goal.component';
import { ReposModule } from 'app/repos/repos.module';

import { GoalsService } from './goals.service';

import { GoalFormBuilderService } from './goal/goal-form-builder.service';

import { MyGoalsStream } from './streams/my-goals.stream';
import { AddGoalStream } from './streams/add-goal.stream';
import { CloneGoalStream } from './streams/clone-goal.stream';

@NgModule({
  imports: [
    SharedModule,
    BrowserModule,
    ActionModule,
    FormsModule,
    ReactiveFormsModule,
    ReposModule
  ],
  exports: [],
  declarations: [MyGoalsComponent, GoalComponent],
  providers: [
    GoalsService,
    MyGoalsStream,
    AddGoalStream,
    CloneGoalStream,
    GoalFormBuilderService
  ]
})
export class GoalModule {}
