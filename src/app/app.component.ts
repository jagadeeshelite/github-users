import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selectedTab;
  constructor(private _router: Router) {
    this.home();
  }

  home() {
    this.selectedTab = 'home';
    this._router.navigate(['/users']);
  }
  searcHistory() {
    this.selectedTab = 'search-history';
    this._router.navigate(['/search-history']);
  }
}
