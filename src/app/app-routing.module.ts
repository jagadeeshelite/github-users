import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { SearchHistoryComponent } from './search-history/search-history.component';
const routes: Routes = [
  { path: 'users', component: UserSearchComponent },
  { path: 'users/:username', component: UserSearchComponent },
  { path: 'search-history', component: SearchHistoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
