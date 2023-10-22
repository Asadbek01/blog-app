import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss']
})
export class ArticlePage {

  type =''

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: any,

  ) {this.type = this.router.url.split("/")[2]}
  


  ionViewDidEnter() {
    if (isPlatformBrowser(this.platformId)) {
    
      new AppService();
    }
  }
}