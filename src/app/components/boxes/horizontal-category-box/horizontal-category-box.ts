import { Component, ElementRef, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/server_services/api.service';

@Component({
  selector: 'app-horizontal-category-box',
  templateUrl: './horizontal-category-box.html',
  styleUrls: ['./horizontal-category-box.scss']
})
export class HorizontalCategory {

categories: any[] = [];
  @ViewChild('tabsBox')tabsBox!: ElementRef;
@ViewChild('arrowIcons') arrowIcons!: ElementRef;
isDragging: boolean = false; 
position = 0;
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



  ngAfterViewInit() {
    // Initialize your component here
    const tabsBox = this.tabsBox.nativeElement;
    const allTabs = tabsBox.querySelectorAll('.tab');
    const arrowIcons = this.arrowIcons.nativeElement.querySelectorAll('i');

    const handleIcons = (scrollVal:any) => {
      let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
      arrowIcons[0].parentElement.style.display = scrollVal <= 0 ? 'none' : 'flex';
      arrowIcons[1].parentElement.style.display = maxScrollableWidth - scrollVal <= 1 ? 'none' : 'flex';
    };

    arrowIcons.forEach((icon:any) => {
      icon.addEventListener('click', () => {
        // if clicked icon is left, reduce 350 from tabsBox scrollLeft else add
        let scrollWidth = (tabsBox.scrollLeft += icon.id === 'left' ? -340 : 340);
        handleIcons(scrollWidth);
      });
    });

    allTabs.forEach((tab :any)=> {
      tab.addEventListener('click', () => {
        tabsBox.querySelector('.active').classList.remove('active');
        tab.classList.add('active');
      });
    });

    const dragging = (e:any) => {
      if (!this.isDragging) return;
      tabsBox.classList.add('dragging');
      tabsBox.scrollLeft -= e.movementX;
      handleIcons(tabsBox.scrollLeft);
    };

    const dragStop = () => {
      this.isDragging = false;
      tabsBox.classList.remove('dragging');
    };

    tabsBox.addEventListener('mousedown', () => (this.isDragging = true));
    tabsBox.addEventListener('mousemove', dragging);
    document.addEventListener('mouseup', dragStop);
  }

  onTabClick(tab:any) {
    this.categories.forEach(t => t.active = false); // Deselect all tabs
    tab.active = true; // Select the clicked tab
  }


}
