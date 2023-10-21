import {Component, ElementRef, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import { RouterOutletService } from 'src/app/services/router.outlet.service';
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-scroller-mobile',
  templateUrl: './app-scroller-mobile.component.html',
  styleUrls: ['./app-scroller-mobile.component.scss'],
})
export class AppScrollerMobileComponent implements OnInit {
  scrollPercentage = 0;
  isScrolling = false;
  scrollingNumbers = 0;
  progress = 0;
  circumference = 2 * Math.PI * 54;
  offset = this.circumference;
  routerOutletElement: ElementRef | undefined;
  constructor(private routerOutletService: RouterOutletService,
              @Inject(PLATFORM_ID) private platformId: any) { }

  updateProgressBar(): void {
    if(isPlatformBrowser(this.platformId)) {
      const {scrollTop, scrollHeight, clientHeight} = this.routerOutletElement?.nativeElement;
      const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
      this.progress = Math.floor(scrollPercent);
      this.offset = this.circumference - (scrollPercent / 100) * this.circumference;
      const progress_bar = document.getElementById('progress_bar');
      if (progress_bar) {
        progress_bar.style.display = (this.progress <= 1) ? 'none' : '';
      }
    }
  }
  scrollPageTopMobile() {
    if(isPlatformBrowser(this.platformId)) {
      // this.routerOutletElement.nativeElement.scrollTop = 0;
      const sectionElement = this.routerOutletElement?.nativeElement.querySelector('.ion-page');
      if (sectionElement) {
        sectionElement.scrollIntoView({behavior: 'smooth'});
      } else {
        if (this.routerOutletElement) {
          this.routerOutletElement.nativeElement.scrollTop = 0;
        }
      }
    }
  }
  ngAfterViewInit() {
    if(isPlatformBrowser(this.platformId)) {
      this.routerOutletElement = this.routerOutletService.getRouterOutlet();
      if (this.routerOutletElement) {
        this.routerOutletElement.nativeElement.addEventListener('scroll', this.handleScroll);
      }
    }
  }
  handleScroll = (event: any) => {
    if(isPlatformBrowser(this.platformId)) {
      this.updateProgressBar();
    }
  }
  ngOnInit() {
    if(isPlatformBrowser(this.platformId)) {
      let progressBar = document.getElementById('progress_bar');
      if (progressBar) {
        progressBar.style.display = 'none';
      }
    }
  }

}
