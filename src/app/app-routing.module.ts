import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageResolver } from './resolver/main_page.resolver';
import { BlogPageResolver } from './resolver/blogs_page.resolver';

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
      blogs: BlogPageResolver,
    }
  },
  {
    path: 'blog/:slug',
    loadChildren: () => import('./pages/article/article.page.module').then(m => m.ArticlePageModule),
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
