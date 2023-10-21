import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { Observable, of, switchMap } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { ApiService } from '../server_services/api.service';
@Injectable({
  providedIn: 'root'
})
export class BlogPageResolver implements Resolve<any> {
  constructor(
    @Inject('DATA_SERVICE') private dataService: any,
    private transferState: TransferState,
    @Inject(PLATFORM_ID) private platformId: any,
    private apiService: ApiService,
  ) { }
  resolve(): Observable<any> {
    const key = makeStateKey<any>('blogs'); //this key name must be the same as in page module where is setting data to transferState in this case home.about.ts
    /**
     * Getting data from transferstate
     * On the server side, there is no data set in transferState,
     * so they will be retrieved from the database and saved to
     * transferState in the home.about.ts module. When the browser
     * wants to get this data, it will be already set in transferState
     * and the browser does not need to refer to the database, it only uses
     * data already existing in transferState
     */
    if (this.transferState.hasKey(key)) {
        const data = this.transferState.get(key, null);
        this.transferState.remove(key);
        return of(data);
    }
    /**
     * Getting data from database
     * On the server side, there is no data set in transferState,
     * so they will be retrieved from the database and saved to
     * transferState in the home.about.ts module. When the browser
     * wants to get this data, it will be already set in transferState
     * and the browser does not need to refer to the database, it only uses
     * data already existing in transferState
     *  */
    
      return this.apiService.getBlogs().pipe(
        switchMap((blogs:any) => {
          let data:any = (blogs?blogs[0] || blogs:null);
          if (!data) {
            console.error('!!!!!!!!!!! No data in Blogs !!!!!!!!!!!!!!!');
            return of(null);
          }
          return of(data);
        })
      );

    
  }
}
