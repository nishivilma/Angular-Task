import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent {
  taskList: string[] = [];
  myTask: string = '';
  searchText: string = '';
  editingTask: string = '';
  editingTaskIndex: number = -1;

  addTodo() {
    this.taskList.push(this.myTask);
    this.myTask = '';
  }

  remove(index: number) {
    this.taskList.splice(index, 1);
  }

  edit(index: number) {
    // this.editingTask = this.taskList[index];
    this.editingTaskIndex = index;
  }

  UpdateTask(index: number) {
    // if (this.editingTaskIndex !== -1) {
    //   this.taskList[this.editingTaskIndex] = this.editingTask;
    //   this.editingTask = '';
    this.editingTaskIndex = -1;
  }
  cancel() {
    this.editingTaskIndex = -1;
  }
}
