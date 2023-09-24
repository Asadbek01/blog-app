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
}