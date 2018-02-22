import { Component, OnInit } from '@angular/core';
import { RedditsService } from '../../services/reddits.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reddits',
  templateUrl: './reddits.component.html',
  styleUrls: ['./reddits.component.css']
})
export class RedditsComponent implements OnInit {
  public reddits: any;

  constructor(private rs: RedditsService, private router: Router) { }

  ngOnInit() {
    this.rs.getPosts("funny", 25).subscribe(r => {
      this.reddits = r;
    });
  }

  doRedditsDetail(reddit: any) {
    this.rs.reddit = reddit;
    this.router.navigate(['/reddits-detail']);
  }
}
