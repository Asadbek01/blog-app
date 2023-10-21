import { Component,PLATFORM_ID, Inject, } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AppService } from 'src/app/services/app.service';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private transferState: TransferState,
    private route: ActivatedRoute,
  )
  {}
  ngOnInit() {
    this.getDataFromResolver();
  }

  getDataFromResolver() {
  let key = makeStateKey<any>('mainPage'); // The key name in transferState must be the same as in resolver
  let apiData = this.route.snapshot.data; //Read data from router (resolver)  

  if (apiData) {
    this.transferState.set(key, apiData); // Set data to TransferState (saving as array to keep structure returned from firebase)
    console.log('Data from resolver:', apiData);
  }
}

  
  ionViewDidEnter() {
    if(isPlatformBrowser(this.platformId)) {
      new AppService();
    }
  }
}


