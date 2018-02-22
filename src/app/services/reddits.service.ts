import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/map';

@Injectable()
export class RedditsService {
  protected readonly REDDITS_BASE_URL: string = 'https://www.reddit.com/r';

  public reddit: any;

  constructor(private httpClient: HttpClient) { }

  getPosts(category, limit): Observable<any> {
    return this.httpClient.get<any>(`${ this.REDDITS_BASE_URL + '/' + category + '/top.json?limit=' + limit }`);
  }
}
