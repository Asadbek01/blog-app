import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-card-box',
  templateUrl: './blog-card-box.component.html',
  styleUrls: ['./blog-card-box.component.scss']
})
export class BlogCardBoxComponent {

  @Input() item: any;
  constructor(  ) { }
}
