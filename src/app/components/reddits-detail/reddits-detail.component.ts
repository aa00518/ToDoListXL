import { Component, OnInit } from '@angular/core';
import { RedditsService } from '../../services/reddits.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-reddits-detail',
  templateUrl: './reddits-detail.component.html',
  styleUrls: ['./reddits-detail.component.css']
})
export class RedditsDetailComponent implements OnInit {

  public reddit: any;

  constructor(private rs: RedditsService, private location: Location) { }

  ngOnInit() {
    this.reddit = this.rs.reddit;
  }

  doGoBack() {
    this.location.back();
  }
}
