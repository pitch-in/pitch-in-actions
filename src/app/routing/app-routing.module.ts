import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyGoalsComponent } from 'app/goal/my-goals/my-goals.component';

const routes: Routes = [
  { path: '', redirectTo: '/my-goals', pathMatch: 'full' },
  { path: 'my-goals', component: MyGoalsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
