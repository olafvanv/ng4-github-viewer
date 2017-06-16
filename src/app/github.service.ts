import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  constructor(private http: Http) { }

  getUser(name: string) { 
    return this.http.get("https://api.github.com/users/" + name).map((data) => {
      return data.json();
    });
  }

  getRepos(url: string){
    return this.http.get(url).map((data) => {
      return data.json();
    });
  }

  getRepoDetails(user: string, repo:string){
    return this.http.get("https://api.github.com/repos/"+user+"/"+repo).map((data) => {
      return data.json();
    });
  }

  getContributors(url: string){
    return this.http.get(url).map((data)=>{
      return data.json();
    })
  }
}
