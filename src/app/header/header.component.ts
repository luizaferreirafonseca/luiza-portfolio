import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  showMenu: boolean = false;

  toggleMenu(){
    this.showMenu = !this.showMenu; 
  }

  blogClick(){
    alert('Em construção')
  }

}
