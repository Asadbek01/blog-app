import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/server_services/api.service';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-article-box',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {

  article: any = {};
  @Input() type: any;
  apiUrl = 'https://azamjonov-apis-f853756263d3.herokuapp.com';
  
    constructor(@Inject(PLATFORM_ID) private platformId: any,
    private apiService: ApiService,
    private router: Router
    ) {}
  
    ngOnInit() {
      this.getObservableData(this.type);
    }
    
  getObservableData(type: string) {
    this.apiService.getBlogSlug(this.type).subscribe(
      (data: any) => {
        this.article = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  
  
  
  }

    ionViewDidEnter() {
      if(isPlatformBrowser(this.platformId)) {
        new AppService();
      }
    }
}
