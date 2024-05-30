import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {

  constructor(private http: HttpClient) { }

  

  getGitHubCalendar(username:string):Observable<any>{
    return this.http.get(`https://api.github.com/users/${username}/events`);
  }

}
