import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list-element',
  templateUrl: './todo-list-element.component.html',
  styleUrls: ['./todo-list-element.component.css']
})
export class TodoListElementComponent implements OnInit {
  @Input() todoElement: any;

  constructor() { }

  ngOnInit() {
  }

}
