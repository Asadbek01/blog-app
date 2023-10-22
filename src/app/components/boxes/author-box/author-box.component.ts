import { Component, Input } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-author-box',
  templateUrl: './author-box.component.html',
  styleUrls: ['./author-box.component.scss']
})
export class AuthorBoxComponent {
  @Input() article: any;

  constructor(
    public utilsService: UtilsService
  ) {}



}
