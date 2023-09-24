import {Injectable} from '@angular/core';
import {FirebaseService} from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  dataService: any;

  constructor() {
    this.dataService = new FirebaseService();
  }

}