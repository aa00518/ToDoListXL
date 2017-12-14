import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  public savingChanges: boolean = false;
  public changesSaved: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  modalClick() {
    this.changesSaved = false;
  }

  doSaveChanges() {
    this.savingChanges = true;
    setTimeout(() => {
      this.savingChanges = false;
      this.changesSaved = true;
    }, 1000);
  }
}
