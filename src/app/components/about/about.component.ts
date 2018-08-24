import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public savingChanges: boolean = false;
  public changesSaved: boolean = false;

  constructor() { }

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
      setTimeout(() => {
        this.changesSaved = false;
      }, 3000);
    }, 2000);
  }
}
