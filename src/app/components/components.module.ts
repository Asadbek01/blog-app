import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {IonicModule} from "@ionic/angular";
import {FooterComponent} from  './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BlogBoxComponent } from './boxes/blog-box/blog-box.component';
import { ArticleComponent } from './boxes/article/article.component';
import { DicoverMoreBoxComponent } from './boxes/dicover-more-box/dicover-more-box.component';
import { AppScrollerMobileComponent } from "./boxes/app-scroller-mobile/app-scroller-mobile.component";
import { AppScrollerComponent } from "./boxes/app-scroller/app-scroller.component";
@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent,
        BlogBoxComponent,
        ArticleComponent,
        DicoverMoreBoxComponent,
        AppScrollerMobileComponent,
        AppScrollerComponent
    ],
    exports: [
        FooterComponent,
        HeaderComponent,
        BlogBoxComponent,
        ArticleComponent,
        DicoverMoreBoxComponent,
        AppScrollerMobileComponent,
        AppScrollerComponent
      ],
      imports: [FormsModule, CommonModule,
        IonicModule],
      providers: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    
    export class ComponentsModule {
    }
    