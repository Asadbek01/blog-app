import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/server_services/api.service';

@Component({
  selector: 'app-horizontal-category-box',
  templateUrl: './horizontal-category-box.html',
  styleUrls: ['./horizontal-category-box.scss']
})
export class HorizontalCategory {

categories: any[] = [];
@ViewChild('tabsBox') tabsBox: ElementRef | undefined;
  @ViewChild('leftArrow') leftArrow: ElementRef | undefined;
  @ViewChild('rightArrow') rightArrow: ElementRef | undefined;

  scrollIndex = 0
  constructor(
    private apiService: ApiService,
    private renderer: Renderer2

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
 // Function to scroll the tabs to the left
 scrollLeft() {
  if (this.tabsBox && this.scrollIndex > 0) {
    const scrollAmount = 100; // Adjust as needed
    this.tabsBox.nativeElement.scrollLeft -= scrollAmount;
    this.scrollIndex--; // Decrease scrollIndex when scrolling left
  }
}

// Function to scroll the tabs to the right
scrollRight() {
  if (this.tabsBox) {
    const scrollAmount = 100; // Adjust as needed
    this.tabsBox.nativeElement.scrollLeft += scrollAmount;
    this.scrollIndex++; // Increase scrollIndex when scrolling right
  }
}

// Add event listeners for arrow icons click events
ngAfterViewInit() {
  if (this.leftArrow && this.rightArrow) {
    this.leftArrow.nativeElement.addEventListener('click', () => {
      this.scrollLeft();
    });

    this.rightArrow.nativeElement.addEventListener('click', () => {
      this.scrollRight();
    });
  }
}
  onTabClick(tab:any) {
    this.categories.forEach(t => t.active = false); // Deselect all tabs
    tab.active = true; // Select the clicked tab
  }


}
