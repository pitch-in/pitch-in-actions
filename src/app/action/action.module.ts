import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ActionComponent } from './action/action.component';

import { ActionFormBuilderService } from './action-form-builder.service';

@NgModule({
  imports: [FormsModule, ReactiveFormsModule],
  exports: [ActionComponent],
  declarations: [ActionComponent],
  providers: [ActionFormBuilderService]
})
export class ActionModule {}
