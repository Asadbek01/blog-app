import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/server_services/api.service';
import { AppService } from 'src/app/services/app.service';
import { UtilsService } from 'src/app/services/utils.service';
import hljs from 'highlight.js';
@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss']
})
export class ArticlePage {

  type ='';
  article: any = {};

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: any,
    private apiService: ApiService,
    private utilsService: UtilsService

  ) {this.type = this.router.url.split("/")[2]}

  ngOnInit() {
    this.getObservableData(this.type);
  }
  
  getObservableData(type: string) {
    this.apiService.getBlogSlug(this.type).subscribe(
      (data: any) => {
        this.article = data;
        console.log(this.article);
        
      },
      (error: any) => {
        console.log(error);
      }
    );
  
  
  
  }

  ngAfterViewInit() {
    hljs.initHighlightingOnLoad();
  }
  ionViewDidEnter() {
    if (isPlatformBrowser(this.platformId)) {
      new AppService();
    }
   
  }
}