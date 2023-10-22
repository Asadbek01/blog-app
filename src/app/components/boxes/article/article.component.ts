import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/server_services/api.service';
import { AppService } from 'src/app/services/app.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-article-box',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {

  @Input() article: any;
  @Input() type: any;
  
    constructor(
      @Inject(PLATFORM_ID) private platformId: any,
    ) {}
  
    ngOnInit() {
    }
    


    ionViewDidEnter() {
      if(isPlatformBrowser(this.platformId)) {
        new AppService();
      }
    }
}
