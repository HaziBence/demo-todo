import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';

  todos = [{name: "Mosás", done: false},
           {name: "Takarítás", done: true},
           {name: "Evés", done: false},
           {name: "Alvás", done: false}];

  constructor() {
    this.remain();
  }

   remain():number {
    let count = 0;
    this.todos.forEach(element => {
      if (!element.done)
      {
        count++;
      }
    });
    return count;
  };

}
