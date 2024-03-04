import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

   getBlogs() : Observable<any[]> {
    let modelName = 'api/blogs';
    return new Observable<any[]>((observer) => {
      fetch(`${environment.apiUrl}/${modelName}`, {
        method: 'GET',
        headers:({
          'Content-Type': 'application/json',
        })  
      })
        .then((response) => response.json() )
        .then((data) => {
         // observe data order descending
         data && data.sort((a:any, b:any) => b.id - a.id);
           // data.data.sort((a:any, b:any) => a.id - b.id);
          observer.next(data);
          observer.complete();
        })
        .catch((error) => {
          console.error('Error fetching data from API:', error);
          // observer.error(error);
        });
    });
   
  }
 

getBlogSlug(slug: string) : Observable<any[]> {
  let modelName = `api/blogs/${slug}`;
  return new Observable<any[]>((observer) => {
    fetch(`${environment.apiUrl}/${modelName}`, {
      method: 'GET',
      headers:({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${environment.bearerToken}`

      })  
    })
      .then((response) => response.json() )
      .then((data) => {
        observer.next(data);
        observer.complete();
      })
      .catch((error) => {
        console.error('Error fetching data from API:', error);
        observer.error(error);
      });
  });

}


getBlogCategory(category: string) : Observable<any[]> {
  let modelName = `api/blogs?filters[category]=${category}`;
  return new Observable<any[]>((observer) => {
    fetch(`${environment.apiUrl}/${modelName}`, {
      method: 'GET',
      headers:({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${environment.bearerToken}`

      })  
    })
      .then((response) => response.json() )
      .then((data) => {
        observer.next(data);
        observer.complete();
      })
      .catch((error) => {
        console.error('Error fetching data from API:', error);
        observer.error(error);
      });
  });

}

getAllCategories() : Observable<any[]> {
 let modelName = 'api/blogs?fields=category';
   return new Observable<any[]>((observer) => {
     fetch(`${environment.apiUrl}/${modelName}`, {
       method: 'GET',
       headers:({
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${environment.bearerToken}`
       })
      })
        .then((response) => response.json() )
        .then((data) => {
          observer.next(data);
          observer.complete();
        })
        .catch((error) => {
          console.error('Error fetching data from API:', error);
          observer.error(error);
        });
});
}

}
