import { Component } from '@angular/core';
import { ApiService } from 'src/app/server_services/api.service';

@Component({
  selector: 'app-dicover-more-box',
  templateUrl: './dicover-more-box.component.html',
  styleUrls: ['./dicover-more-box.component.scss']
})
export class DicoverMoreBoxComponent {

categories: any[] = [];

  constructor(
    private apiService: ApiService,

  ) { }


  ngOnInit() {
    this.getObservableData();
  }

  getObservableData() {
    this.apiService.getAllCategories().subscribe(
      (data: any) => {
        const uniqueCategories = [...new Set(data.map((item: any) => item.category))];
        uniqueCategories.forEach((category: any) => {
          this.categories.push({
            category,            
          });
        });
        console.log(this.categories);
      },
      (error: any) => {
        console.log(error);
      }
    );
  
  
  
  }
}
