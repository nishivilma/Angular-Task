import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() data: string[] = [];

  name: string[] = [];
  //data!: string[];

  // addName(newNameInput: string) {
  //   this.name.push(newNameInput);
  // }

  addName(event: string) {
    this.name.push(event);
  }

  ngOnInit(): void {}
}
