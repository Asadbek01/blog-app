import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPageResolver } from './resolver/blogs_page.resolver';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'blogs',
    loadChildren: () => import('./pages/blog/blog.module').then(m => m.BlogPageModule),
    resolve: {
      blogs: BlogPageResolver,
    }
  },
  {
    path: 'blog/:slug',
    loadChildren: () => import('./pages/article/article.page.module').then(m => m.ArticlePageModule),
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
