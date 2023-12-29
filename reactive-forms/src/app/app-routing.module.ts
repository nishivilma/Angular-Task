import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { DetailsComponent } from './details/details.component';
import { TaskComponent } from './task/task.component';
import { ChildComponent } from './task/child/child.component';
import { ParentComponent } from './task/parent/parent.component';
import { TodolistComponent } from './todolist/todolist.component';
import { DropdownComponent } from './dropdown/dropdown.component';

const routes: Routes = [
  { path: '', redirectTo: '/signupForm', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent },
  { path: 'details', component: DetailsComponent },
  {
    path: 'task',
    component: TaskComponent,
  },
  { path: 'todo', component: TodolistComponent },
  { path: 'drop', component: DropdownComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
