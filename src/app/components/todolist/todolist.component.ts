import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDoListItemID } from './../../models/todolistitem.model';
import { TodolistService } from './../../services/todolist.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  public todoItem: string = "";
  public deleteID: string;
  public deleteValue: string;
  public todoListItems: Observable<ToDoListItemID[]>;

  constructor(public toDoList: TodolistService) {
  }

  ngOnInit() {
    this.todoListItems = this.toDoList.getToDoListItemsSnapshot();
  }

  doInsert() {
    if (this.todoItem.trim() !== "") {
      this.toDoList.insertToDoListItem(this.todoItem.trim());
    }
    this.todoItem = "";
  }

  doDeleteModal(deleteID: string, deleteValue: string) {
    this.deleteID = deleteID;
    this.deleteValue = deleteValue;
  }

  doDelete() {
    this.toDoList.deleteToDoListItem(this.deleteID);
  }
}
