import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { RouterOutletService } from './services/router.outlet.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('content', {static: true}) routerOutletElement: ElementRef | undefined;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private routerOutletService: RouterOutletService,
  )
  {}

  ngAfterViewInit() {
    if(isPlatformBrowser(this.platformId)) {
      if (this.routerOutletElement) {
        this.routerOutletService.setRouterOutlet(this.routerOutletElement);
      }
    }
  }
}
