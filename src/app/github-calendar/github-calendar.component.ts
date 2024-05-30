import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GithubServiceService } from '../services/github-service.service';

@Component({
  selector: 'app-github-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './github-calendar.component.html',
  styleUrl: './github-calendar.component.css'
})
export class GithubCalendarComponent {

@Input() username: string = '';
calendarData: any[] = [];

constructor(private githubService: GithubServiceService) {}

  ngOnInit() {
    this.loadCalendarData();
  }

  loadCalendarData() {
    this.githubService.getGitHubCalendar(this.username)
      .subscribe(data => {
        this.calendarData = data;
      });
  }




}
