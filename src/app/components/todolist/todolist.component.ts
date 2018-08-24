import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  public updateID: string;
  public updateValue: string;
  public todoListItems: Observable<ToDoListItemID[]>;
  @ViewChild("updateTextBox") updateTextBox: ElementRef;

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

  doUpdateModal(updateID: string, updateValue: string) {
    this.updateID = updateID;
    this.updateValue = updateValue;
    setTimeout(() => {
      this.updateTextBox.nativeElement.focus();
    }, 550);
  }

  doUpdate() {
    this.toDoList.updateToDoListItem(this.updateID, this.updateValue);
  }
}
