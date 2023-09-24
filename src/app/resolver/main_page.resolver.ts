import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { Observable, of, switchMap } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class MainPageResolver implements Resolve<any> {
  constructor(
    @Inject('DATA_SERVICE') private dataService: any,
    private transferState: TransferState,
    @Inject(PLATFORM_ID) private platformId: any,
  ) {
  }
  resolve(): Observable<any> {
    const key = makeStateKey<any>('mainPageData'); //this key name must be the same as in page module where is setting data to transferState in this case home.about.ts
    /**
     * Getting data from transferstate
     * On the server side, there is no data set in transferState,
     * so they will be retrieved from the database and saved to
     * transferState in the home.about.ts module. When the browser
     * wants to get this data, it will be already set in transferState
     * and the browser does not need to refer to the database, it only uses
     * data already existing in transferState
     */
    const existingData = this.transferState.get(key, null);
    if (existingData || isPlatformBrowser(this.platformId)) { //when isPlatformBrowser always return existing data
      return of(existingData);
    } else {
      return this.dataService.getMainPage().pipe(
        switchMap((mainPageData:any) => {
          let data:any = (mainPageData?mainPageData[0] || mainPageData:null);
          if (!data) {
            console.error('!!!!!!!!!!! No data in main_page !!!!!!!!!!!!!!!');
            return of(null);
          }
          return of(data);
        })
      );

    }
  }
}
