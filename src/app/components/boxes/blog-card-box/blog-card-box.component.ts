import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, PLATFORM_ID, makeStateKey } from '@angular/core';
import { TransferState } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-blog-card-box',
  templateUrl: './blog-card-box.component.html',
  styleUrls: ['./blog-card-box.component.scss']
})
export class BlogCardBoxComponent {
  type ='';
  articles =[]
  constructor(
    private route: ActivatedRoute,
    public utilsService: UtilsService,
    private transferState: TransferState,
    ){}
  
ngOnInit() {
  this.getDataFromResolver();
  this.utilsService.addEllipsisIfNeeded()
}

getDataFromResolver() {
  let key = makeStateKey<any>('tags'); // The key name in transferState must be the same as in resolver
  let apiData = this.route.snapshot.data; //Read data from router (resolver)

  // here we are checking if data is already set in transferState
  if (apiData) {
    this.articles = apiData['tags'];
    this.transferState.set(key, this.articles); // Set data to TransferState (saving as array to keep structure returned from firebase)
  }
}
  
  
  


  


}