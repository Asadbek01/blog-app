import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageResolver } from './resolver/main_page.resolver';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
    resolve: {
      pageData: MainPageResolver,
    }
  },
  {
    path: 'blogs',
    loadChildren: () => import('./pages/blog/blog.module').then(m => m.BlogPageModule),
    resolve: {
      pageData: MainPageResolver,
    }
  },
  {
    path: 'blog/:slug',
    loadChildren: () => import('./pages/blog/blog.module').then(m => m.BlogPageModule),
    resolve: {
      pageData: MainPageResolver,
    }
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
