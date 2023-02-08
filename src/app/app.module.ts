import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from '../users.service';
import { AppRoutingModule } from './app-routing.module';

import { UserSearchComponent } from './user-search/user-search.component';
import { SearchHistoryComponent } from './search-history/search-history.component';
@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  declarations: [AppComponent, UserSearchComponent, SearchHistoryComponent],
  bootstrap: [AppComponent],
  providers: [UsersService],
})
export class AppModule {}
