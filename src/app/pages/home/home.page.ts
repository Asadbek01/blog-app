import { Component,PLATFORM_ID, Inject, } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AppService } from 'src/app/services/app.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {

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


