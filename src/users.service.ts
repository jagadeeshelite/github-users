import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsersService {
  /***  github api to fetch users based on user name
   * Api refence https://api.github.com/
   */
  apiURL = 'https://api.github.com/search/users';

  constructor(private http: HttpClient) {}

  // Get user
  searchUser(username: string) {
    //limiting the results to page 1 and 10 items per page
    return this.http.get(`${this.apiURL}?q=${username}&page=1&per_page=10`);
  }
}
