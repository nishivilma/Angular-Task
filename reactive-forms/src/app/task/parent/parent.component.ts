import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  name!: string[];
  //data: any;

  @Input() data: string[] = [];
  @Output() newChildEvent = new EventEmitter<string>();
  item: any;

  OnAdd(value: string) {
    this.newChildEvent.emit(value);
    console.log(value);
  }

  ngOnInit() {}
}
