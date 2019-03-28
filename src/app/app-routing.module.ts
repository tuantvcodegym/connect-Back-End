import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsComponent} from './forms/forms.component';
import {UsersComponent} from './users/users.component';

const routes: Routes = [
  {path: 'home', component: UsersComponent},
  {path: 'update', component: FormsComponent},
  {path: 'update/:id', component: FormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
