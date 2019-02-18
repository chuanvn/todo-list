import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './content/edit/edit.component';
import { AddComponent } from './content/add/add.component';

const routes: Routes = [
  {path: '', component: AddComponent},
  {path: ':id', component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
