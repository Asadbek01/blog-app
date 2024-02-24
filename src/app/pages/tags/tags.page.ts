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
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: any,
    private apiService: ApiService,
    private utilsService: UtilsService

  ) {this.type = this.router.url.split("/")[2]
    console.log(this.type);
 
}

  ngOnInit() {
    this.getObservableData(this.type);
  }
  
  getObservableData(type: string) {
    this.apiService.getBlogCategory("News").subscribe(
      (data: any) => {
        console.log(data)
      },
      (error: any) => {
        console.log(error);
      }
    );
  
  
  
  }
}
