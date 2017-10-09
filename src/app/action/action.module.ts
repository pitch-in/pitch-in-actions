import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ReposModule } from 'app/repos/repos.module';

import { ActionComponent } from './action/action.component';
import { EditActionComponent } from './edit-action/edit-action.component';
import { ShowActionComponent } from './show-action/show-action.component';

import { ActionService } from './action.service';

@NgModule({
  imports: [FormsModule, BrowserModule, ReactiveFormsModule, ReposModule],
  exports: [ActionComponent],
  declarations: [ActionComponent, EditActionComponent, ShowActionComponent],
  providers: [ActionService]
})
export class ActionModule {}
