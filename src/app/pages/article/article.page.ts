import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss']
})
export class ArticlePage {

  type =''

  constructor(
    private router: Router
  ) {this.type = this.router.url.split("/")[2]}
  


}
