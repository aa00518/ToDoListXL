import { Component, OnInit } from '@angular/core';
import { RedditsService } from '../../services/reddits.service';

@Component({
  selector: 'app-reddits',
  templateUrl: './reddits.component.html',
  styleUrls: ['./reddits.component.css']
})
export class RedditsComponent implements OnInit {
  public reddits: any;

  constructor(private rs: RedditsService) { }

  ngOnInit() {
    this.rs.getPosts("funny", 10).subscribe(r => {
      this.reddits = r;
    });
  }
}
