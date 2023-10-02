import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { RouterOutletService } from 'src/app/services/router.outlet.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss']
})
export class BlogPage {

  scrollingNumbers: any;
  routerOutletElement: ElementRef | undefined;

  constructor(
    private routerOutletService: RouterOutletService,
    private elRef: ElementRef, private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: any
  ) { }

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
