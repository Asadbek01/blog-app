import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-blog-box',
  templateUrl: './blog-box.component.html',
  styleUrls: ['./blog-box.component.scss']
})
export class BlogBoxComponent {
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
  )
  {}

  ionViewDidEnter() {
    if(isPlatformBrowser(this.platformId)) {
      new AppService();
    }
  }
}
