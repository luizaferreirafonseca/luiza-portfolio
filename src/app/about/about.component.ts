import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { GithubServiceService } from '../services/github-service.service';
import { GithubCalendarComponent } from '../github-calendar/github-calendar.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, CommonModule, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

constructor(private githubService: GithubServiceService){}

}
