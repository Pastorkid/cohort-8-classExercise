import { Service } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Service()
export class IsLoggedIn {
  $isLoggedIn: BehaviorSubject<string> = new BehaviorSubject<string>('');
  constructor() {
    const getToken = localStorage.getItem('isLoggedInToken');
    this.$isLoggedIn.next(getToken as string);
  }
}
