import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/server_services/api.service';
import { AppService } from 'src/app/services/app.service';
import { UtilsService } from 'src/app/services/utils.service';
@Component({
  selector: 'app-tags',
  templateUrl: './tags.page.html',
  styleUrls: ['./tags.page.scss']
})
export class TagsPage {
  type= ''
  categoryBlogs = [];
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: any,
    private apiService: ApiService,
    private utilsService: UtilsService

  ) {
    this.type = this.router.url.split("/")[2].charAt(0).toUpperCase()+ this.router.url.split("/")[2].slice(1);
    this.getObservableData(this.type)
  }

  ngOnInit() {}
  
  getObservableData(type: string) {
    this.apiService.getBlogCategory(type).subscribe(
      (data: any) => {
       this.categoryBlogs = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  
  
  
  }
}
