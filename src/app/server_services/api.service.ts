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
      fetch(`${environment.apiUrl}${modelName}`, {
        method: 'GET',
        headers:({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${environment.bearerToken}`

        })  
      })
        .then((response) => response.json() )
        .then((data) => {
          console.log('Data from API:', data);
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

