import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
@Component({
  selector: 'app-tags',
  templateUrl: './tags.page.html',
  styleUrls: ['./tags.page.scss']
})
export class TagsPage {

  constructor(@Inject(PLATFORM_ID) private platformId: any,){}

  ionViewDidEnter() {
    if (isPlatformBrowser(this.platformId)) {
      new AppService();
    }
  }
}
