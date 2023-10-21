import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, PLATFORM_ID } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-blog-box',
  templateUrl: './blog-box.component.html',
  styleUrls: ['./blog-box.component.scss']
})
export class BlogBoxComponent {

  @Input() blogs: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    public utilService: UtilsService
  )
  {

  }
  ngOnInit() {
  }

  ionViewDidEnter() {
    if(isPlatformBrowser(this.platformId)) {
      new AppService();
    }
  }
}
