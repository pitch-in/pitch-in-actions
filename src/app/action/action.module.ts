import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ActionComponent } from './action/action.component';

import { ActionFormBuilderService } from './action-form-builder.service';
import { ActionService } from './action.service';
import { ReposModule } from 'app/repos/repos.module';

@NgModule({
  imports: [FormsModule, ReactiveFormsModule, ReposModule],
  exports: [ActionComponent],
  declarations: [ActionComponent],
  providers: [ActionFormBuilderService, ActionService]
})
export class ActionModule {}
