import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() toggleThemeClicked = new EventEmitter<any>();

  isDarkTheme: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onToggleThemeClick() {
    this.isDarkTheme = !this.isDarkTheme;
    this.toggleThemeClicked.emit({darkTheme: this.isDarkTheme});
  }

}
