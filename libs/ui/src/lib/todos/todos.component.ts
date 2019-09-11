import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '@pup-mono/data';

@Component({
  selector: 'pup-mono-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[];

  constructor() {}

  ngOnInit() {}
}
