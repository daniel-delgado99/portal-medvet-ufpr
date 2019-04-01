import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() toggleThemeClicked = new EventEmitter<any>();

  isDarkTheme: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onToggleThemeClick() {
    this.isDarkTheme = !this.isDarkTheme;
    this.toggleThemeClicked.emit({darkTheme: this.isDarkTheme});
  }

}
