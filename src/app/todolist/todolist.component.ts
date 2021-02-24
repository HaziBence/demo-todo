import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  @Input() todos: any;
  newTodo = '';
  
  constructor() { }

  ngOnInit() {
  }

  add(){
    const t = { name: this.newTodo, done: false};
    this.todos.push(t);
    this.newTodo = '';
  }
}
