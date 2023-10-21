import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/server_services/api.service';
import { AppService } from 'src/app/services/app.service';
import { RouterOutletService } from 'src/app/services/router.outlet.service';
import {TransferState, makeStateKey} from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss']
})
export class BlogPage {

  blogs: any[] = [];
  scrollingNumbers: any;
  routerOutletElement: ElementRef | undefined;

  constructor(
    private routerOutletService: RouterOutletService,
    private elRef: ElementRef, private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: any,
    private apiService: ApiService,
    private route: ActivatedRoute,
    private transferState: TransferState,
  ) { }



  ngOnInit() {
    this.getDataFromResolver();
    console.log('Blogs:', this.blogs);

  }

  getDataFromResolver() {
    let key = makeStateKey<any>('blogs'); // The key name in transferState must be the same as in resolver
    let apiData = this.route.snapshot.data; //Read data from router (resolver)

    // here we are checking if data is already set in transferState
    if (apiData) {
      this.blogs = apiData['blogs'];
      this.transferState.set(key, this.blogs); // Set data to TransferState (saving as array to keep structure returned from firebase)
       
    }
  }


  handleScroll = (event: any) => {
    if (isPlatformBrowser(this.platformId)) {
    this.scrollingNumbers = event.target.scrollTop;
    const appHeader = document.querySelector('app-header')
    if(this.scrollingNumbers > 10){
      appHeader?.classList.add("show-bg")
    }else{
      appHeader?.classList.remove("show-bg")
    }
    }
  }

  ionViewDidEnter() {
    if (isPlatformBrowser(this.platformId)) {
      this.routerOutletElement = this.routerOutletService.getRouterOutlet();
      if (this.elRef) {
        this.elRef.nativeElement.querySelectorAll('#scroller_up, #scroller_down').forEach((elem: any) => elem.style.display = 'none');
      }
      if (this.routerOutletElement) {
        this.routerOutletElement.nativeElement.addEventListener('scroll', this.handleScroll);
      }
      new AppService();
    }
  }
}
