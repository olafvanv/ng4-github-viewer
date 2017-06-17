import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { RepoComponent } from './repo/repo.component';
import { ResultsComponent } from './results/results.component';

import { GithubService } from './github.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    RepoComponent,
    ResultsComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    GithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
