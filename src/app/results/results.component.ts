import { Component, Input, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @Input() user = {};
  @Input() loading = false;
  @Input() repos = [];
  @Input() getRepoDetails;
  @Input() showRepoDetails = false;

  repo = {};

  constructor(private githubService: GithubService) { }
 

  ngOnInit() {
  }

}
