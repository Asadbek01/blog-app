import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() linkActive: string='';
  type: any[] = [];
  constructor() {this.type = window.location.pathname.split('/')
}

}
