import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css'],
})
export class SearchHistoryComponent implements OnInit {
  searchHistory: any = [];
  constructor() {}

  ngOnInit() {
    this.getSearchHistory();
  }

  clearHistory() {
    //reset value in local storage
    localStorage.setItem('githubSearch', JSON.stringify([]));
    this.getSearchHistory();
  }

  getSearchHistory() {
    // get search history from local storage
    this.searchHistory = JSON.parse(localStorage.getItem('githubSearch')) || [];
    console.log(this.searchHistory);
  }
}
