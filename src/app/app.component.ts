import { Component, ElementRef, Inject, PLATFORM_ID, Renderer2, ViewChild } from '@angular/core';
import { RouterOutletService } from './services/router.outlet.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  scrollingNumbers: any;

  @ViewChild('content', {static: true}) routerOutletElement: ElementRef | undefined;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private elRef: ElementRef, private renderer: Renderer2,
    private routerOutletService: RouterOutletService,
  )
  {}

  handleScroll = (event: any) => {
    if (isPlatformBrowser(this.platformId)) {
   
    
      this.scrollingNumbers = event.target.scrollTop;
      const appHeader = document.querySelector('app-header')
      if (this.scrollingNumbers > 10) {
        appHeader?.classList.add("show-bg")
      } else {
        appHeader?.classList.remove("show-bg")
      }
    }
  }

  ngAfterViewInit() {
    if(isPlatformBrowser(this.platformId)) {
      if (this.routerOutletElement) {
        this.routerOutletService.setRouterOutlet(this.routerOutletElement);
        this.routerOutletElement = this.routerOutletService.getRouterOutlet();
        if (this.elRef) {
          this.elRef.nativeElement.querySelectorAll('#scroller_up, #scroller_down').forEach((elem: any) => elem.style.display = 'none');
        }
        if (this.routerOutletElement) {
          this.routerOutletElement.nativeElement.addEventListener('scroll', this.handleScroll);
        }
      }
    }
  }
}
