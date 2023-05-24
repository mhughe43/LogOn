import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usernameSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  newUsername!: string;
  

  setUsername(newUsername: string) {
    this.usernameSubject.next(newUsername);
  }

  getUsername() {
    return this.usernameSubject.asObservable();
  }
}
