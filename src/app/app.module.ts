import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';

import { GithubService } from './github.service';
import { RepoComponent } from './repo/repo.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    RepoComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule
  ],
  providers: [
    GithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
