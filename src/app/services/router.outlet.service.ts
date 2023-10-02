import { Injectable, EventEmitter, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouterOutletService {
  private routerOutletElement: ElementRef | undefined;
  public routerOutletChanged: EventEmitter<ElementRef> = new EventEmitter();

  setRouterOutlet(routerOutletElement: ElementRef) {
    this.routerOutletElement = routerOutletElement;
    this.routerOutletChanged.emit(this.routerOutletElement);
  }

  getRouterOutlet(): ElementRef {
    return <ElementRef<any>>this.routerOutletElement;
  }
}
