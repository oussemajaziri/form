import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private catSource = new BehaviorSubject('');
  currentCategory = this.catSource.asObservable();

  private prodSource = new BehaviorSubject('');
  currentProd = this.prodSource.asObservable();

  constructor() { }

  changeCategory(cat: string) {
    this.catSource.next(cat)
  }

  changeProd(prod: string) {
    this.prodSource.next(prod)
  }
}
