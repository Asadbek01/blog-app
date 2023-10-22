import {Injectable} from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class AppService {

    constructor() { 
        this.hamburgerNavigation();
    
    }

private hamburgerNavigation() {
    const hamburgerButtonElement = document.querySelector('.header__hamburgerButton');
    const menuElement = document.querySelector('.header__menu');
    const appHeader = document.querySelector('app-header')
    console.log(appHeader)
    console.log(menuElement)
      let elements = document.querySelectorAll('.ion-page')
      console.log(elements)
    if (hamburgerButtonElement) {
        hamburgerButtonElement.addEventListener('click', () => {
            hamburgerButtonElement.classList.toggle('header__hamburgerButton--active');
            if(menuElement){
              menuElement.classList.toggle('header__hamburgerButton--open') 
              if (menuElement.classList.contains('header__hamburgerButton--open')) {
                elements[1].scrollIntoView({behavior: "smooth"});   
                   }                        
            }
                    
        
        })
    }
}
}

