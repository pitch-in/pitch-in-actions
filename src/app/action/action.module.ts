import { AddActionAction } from './streams/add-action.action';
import { RemoveActionAction } from './streams/remove-action.action';
import { UpdateActionStream } from './streams/update-action.stream';
import { UpdateActionAction } from './streams/update-action.action';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ReposModule } from 'app/repos/repos.module';

import { ActionComponent } from './action/action.component';
import { EditActionComponent } from './edit-action/edit-action.component';
import { MyActionsComponent } from './my-actions/my-actions.component';
import { ShowActionComponent } from './show-action/show-action.component';

import { ActionService } from './action.service';

@NgModule({
  imports: [FormsModule, BrowserModule, ReactiveFormsModule, ReposModule],
  exports: [MyActionsComponent, ActionComponent],
  declarations: [
    MyActionsComponent,
    ActionComponent,
    EditActionComponent,
    ShowActionComponent
  ],
  providers: [
    ActionService,
    UpdateActionAction,
    AddActionAction,
    RemoveActionAction,
    UpdateActionStream
  ]
})
export class ActionModule {}
