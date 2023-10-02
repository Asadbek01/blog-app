import {Component, ElementRef, Inject, OnInit, PLATFORM_ID, Renderer2} from '@angular/core';
import { RouterOutletService } from 'src/app/services/router.outlet.service';
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-scroller',
  templateUrl: './app-scroller.component.html',
  styleUrls: ['./app-scroller.component.scss'],
})
export class AppScrollerComponent implements OnInit {
  scrollPercentage = 0;
  isScrolling = false;
  scrollingNumbers = 0;
  progress = 0;
  circumference = 2 * Math.PI * 54;
  offset = this.circumference;
  routerOutletElement: ElementRef | undefined;
  constructor(private routerOutletService: RouterOutletService,
              private elRef: ElementRef, private renderer: Renderer2,
              @Inject(PLATFORM_ID) private platformId: any) { }
  scrollPageUp() {
    if(isPlatformBrowser(this.platformId)) {
      if (this.routerOutletElement) {
        this.routerOutletElement.nativeElement.scrollTop -= 893;
      }
      this.isScrolling = true;
    }
  }

  scrollPageDown() {
    if(isPlatformBrowser(this.platformId)) {
      if (this.routerOutletElement) {
        this.routerOutletElement.nativeElement.scrollTop += 893;
      }
      this.isScrolling = true;
    }

  }
  scrollPageTopMobile() {
    if(isPlatformBrowser(this.platformId)) {
      // this.routerOutletElement.nativeElement.scrollTop = 0;
      if (this.routerOutletElement) {
        const sectionElement = this.routerOutletElement.nativeElement.querySelector('section');
        sectionElement ? sectionElement.scrollIntoView({behavior: 'smooth'}) : this.routerOutletElement.nativeElement.scrollTop = 0;
      }
    }
  }


  ngOnInit() {

  }

  ngAfterViewInit() {
    if(isPlatformBrowser(this.platformId)) {
      // here we could add a listener to the scroll event
      this.routerOutletElement = this.routerOutletService.getRouterOutlet();
      if (this.elRef) {
        this.elRef.nativeElement.querySelectorAll('#scroller_up, #scroller_down').forEach((elem: any) => elem.style.display = 'none');
      }
      if (this.routerOutletElement) {
        this.routerOutletElement.nativeElement.addEventListener('scroll', this.handleScroll);
      }
    }
  }
  handleScroll = (event: any) => {
    if(isPlatformBrowser(this.platformId)) {
      const scrollerUp = document.getElementById('scroller_up');
      const scrollerDown = document.getElementById('scroller_down');
      this.isScrolling = true;
      this.scrollingNumbers = event.target.scrollTop;
      if (scrollerUp && scrollerDown) {
        this.isScrolling ? (scrollerUp.style.removeProperty('display'), scrollerDown.style.removeProperty('display')) :
          (scrollerUp.style.display = 'none', scrollerDown.style.display = 'none');
        scrollerUp.style.filter = this.scrollingNumbers === 0 ? 'opacity(0.3)' : 'opacity(1)';
        scrollerDown.style.display = this.scrollingNumbers > this.routerOutletElement?.nativeElement.scrollHeight - this.routerOutletElement?.nativeElement.clientHeight - 100 ? 'none' : 'block';
        scrollerUp.classList.toggle('scroller_style', this.scrollingNumbers >= 5157 && this.scrollingNumbers <= 6000);
        scrollerDown.classList.toggle('scroller_style', this.scrollingNumbers >= 5157 && this.scrollingNumbers <= 6000);
      }
    }
  }


}
