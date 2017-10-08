import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ActionComponent } from './action/action.component';

import { ActionService } from './action.service';
import { ReposModule } from 'app/repos/repos.module';

@NgModule({
  imports: [FormsModule, ReactiveFormsModule, ReposModule],
  exports: [ActionComponent],
  declarations: [ActionComponent],
  providers: [ActionService]
})
export class ActionModule {}
