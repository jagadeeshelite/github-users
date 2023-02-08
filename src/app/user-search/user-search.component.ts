import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css'],
})
export class UserSearchComponent implements OnInit {
  users: any = [];
  searchTerm: string;
  isSubmitted: boolean = false;
  constructor(
    private userservice: UsersService,
    private route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    //get router params
    this.route.params.subscribe((params) => {
      const username = params['username'];
      if (username) {
        this.getUsersList(username);
      }
    });
  }

  searchGithubUsers() {
    this.isSubmitted = true;
    if (this.searchTerm) {
      this.getUsersList(this.searchTerm);
    }
  }

  getUsersList(username) {
    this._router.navigate([`users/${username}`]);
    //get data from localstorage
    let searchHistory = JSON.parse(localStorage.getItem('githubSearch')) || [];

    //use the userservice to get data from api
    this.userservice.searchUser(username).subscribe((user) => {
      //bind response to users
      this.users = user['items'];
      searchHistory.push({
        searchTerm: username,
        result: user['items'],
      });
      //save data to localstorage
      localStorage.setItem('githubSearch', JSON.stringify(searchHistory));
    });
  }

  checkUser() {
    // check for users count
    return this.users.length;
  }
}
