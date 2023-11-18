import {CUSTOM_ELEMENTS_SCHEMA, NgModule, SecurityContext} from "@angular/core";
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
import { AuthorBoxComponent } from "./boxes/author-box/author-box.component";
import { MarkdownModule } from 'ngx-markdown';
import { HorizontalCategory } from "./boxes/horizontal-category-box/horizontal-category-box";
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BlogCardBoxComponent} from './boxes/blog-card-box/blog-card-box.component';
@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent,
        BlogBoxComponent,
        ArticleComponent,
        DicoverMoreBoxComponent,
        AppScrollerMobileComponent,
        AppScrollerComponent,
        AuthorBoxComponent,
        HorizontalCategory,
        BlogCardBoxComponent
      
    ],
    exports: [
        FooterComponent,
        HeaderComponent,
        BlogBoxComponent,
        ArticleComponent,
        DicoverMoreBoxComponent,
        AppScrollerMobileComponent,
        AppScrollerComponent,
        AuthorBoxComponent,
        HorizontalCategory,
        MatCardModule,
        BlogCardBoxComponent
      ],
      imports: [
        FormsModule, 
        CommonModule,
        IonicModule,
        MarkdownModule.forRoot(),
        FlexLayoutModule
    
      ],
      providers: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    
    export class ComponentsModule {
    }
    