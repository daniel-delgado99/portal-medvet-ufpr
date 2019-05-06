import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild('buttonCollapse') buttonCollapse;

  @Output() toggleThemeClicked = new EventEmitter<any>();

  theme = 'default-theme';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onToggleThemeClick(event) {
    const theme = event.target.value;
    this.toggleThemeClicked.emit({theme});
  }

  collapseNavbar() {
    if (window.innerWidth < 992) {
      const el: HTMLElement = this.buttonCollapse.nativeElement as HTMLElement;
      el.click();
    }
  }
}
