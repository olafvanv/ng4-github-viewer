import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  user = {};
  repos = [];
  repo = {};
  contributors = [];
  loading = false;
  noResults = false;
  showRepoDetails = false;

  constructor(private githubService: GithubService) { }

  submitSearch(name: string) {
    this.user = {};
    this.loading = true;
    this.noResults = false;
    this.showRepoDetails = false;

    this.githubService.getUser(name).subscribe((data) => {
      this.noResults = false;
      this.user = data;

      this.githubService.getRepos(data.repos_url).subscribe((res) => {
        this.repos = res;
        this.loading = false;
      });
    }, error => {
      this.loading = false;
      this.noResults = true;
    });
  }


  getRepoDetails(user: string, repo: string) {
    this.githubService.getRepoDetails(user, repo).subscribe((res) => {
      this.repo = res;
      this.showRepoDetails = true;
      this.githubService.getContributors(res.contributors_url).subscribe((res) => {
        this.contributors = res;
        console.log(res);
      })
    });
  }

  hideDetails() {
    this.showRepoDetails = false;
  }

  ngOnInit() {
    this.submitSearch("angular");
  }

}
