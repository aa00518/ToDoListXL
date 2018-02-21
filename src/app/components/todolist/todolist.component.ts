import { Component, OnInit } from '@angular/core';
import { TodolistService } from '../../services/todolist.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  public todoItem: string = "";
  public snapshot: any;
  public deleteID: string;
  public deleteValue: string;

  constructor(public toDoList: TodolistService) {
  }

  ngOnInit() {
    this.snapshot = this.toDoList.getToDoListItemsSnapshot();
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
