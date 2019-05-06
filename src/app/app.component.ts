import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portal-medvet-ufpr';
  isDarkTheme = false;
  theme = 'default-theme';

  setTheme(event) {
    this.theme = event.theme + '-theme';
  }
}
