import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface User {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  firstName!: string;
  lastName!: string;
  email!: string;  
  username!: string;
  password!: string;
  newUsername!: string;
  newPassword!: string;
  errorMessage!: string;
  successMessage!: string;
  users: User[] = [];

  constructor() { }
  
 ngOnInit(): void {
  }


  login() {
    const foundUser = this.users.find(user => user.username === this.username && user.password === this.password);
    if (foundUser) {
      this.errorMessage = '';
      this.successMessage = 'Login successful!';
    } else {
      this.errorMessage = 'Invalid username or password.';
      this.successMessage = '';
    }
  }

 



}
