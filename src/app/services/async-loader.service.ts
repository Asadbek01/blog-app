import {Injectable, PLATFORM_ID, Inject} from '@angular/core';
import {TransferState, makeStateKey} from '@angular/platform-browser';
import {isPlatformBrowser} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AsyncLoaderService {

    constructor(
        @Inject('DATA_SERVICE') private dataService: any,
        private transferState: TransferState,
        @Inject(PLATFORM_ID) private platformId: any) {
      }

}