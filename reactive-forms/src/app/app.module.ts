import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskComponent } from './task/task.component';
import { ChildComponent } from './task/child/child.component';
import { ParentComponent } from './task/parent/parent.component';
import { TodolistComponent } from './todolist/todolist.component';
import { SearchPipe } from './search.pipe';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DropdownService } from './service/dropdown.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    DetailsComponent,
    TaskComponent,
    ChildComponent,
    ParentComponent,
    TodolistComponent,
    SearchPipe,
    DropdownComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [DropdownService],
  bootstrap: [AppComponent],
})
export class AppModule {}
