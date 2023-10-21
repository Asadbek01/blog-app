import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {firestore} from 'firebase-admin';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() {
  }

  getMainPage(): Observable<any[]> {
    let modelName = 'main_page';
    return new Observable<any[]>((observer) => {

      firestore().collection(modelName).get()
        .then((snapshot) => {
          const data = snapshot.docs.map((doc) => doc.data());
          observer.next(data);
          observer.complete();
        })
        .catch((error) => {
          console.error('Error fetching data from Firebase:', error);
          observer.error(error);
        });
    });
  }

  // getBlogs() : Observable<any[]> {
  //   console.log('Bearer token:', environment.bearerToken);
  //   let modelName = 'api/blogs';
  //   return new Observable<any[]>((observer) => {
  //     fetch(`${environment.apiUrl}/${modelName}`, {
  //       method: 'GET',
  //       headers:({
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${environment.bearerToken}`
  //       })  
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log('Data from API:', data);
  //         observer.next(data);
  //         observer.complete();
  //       })
  //       .catch((error) => {
  //         console.error('Error fetching data from API:', error);
  //         observer.error(error);
  //       });
  //   });
   
  // }

 
}