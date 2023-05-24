import { Component, OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';


interface User {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
}

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

   newFirstName!: string;
   newLastName!: string;
   newEmail!: string;
  newUsername!: string;
  newPassword!: string;
  errorMessage!: string;
  successMessage!: string;
  users: User[] = [];

  createUser() {
    const newUser: User = {
      firstName: this.newFirstName,
      lastName: this.newLastName,
      email: this.newEmail,
      username: this.newUsername,
      password: this.newPassword
     
    };

    // Check if the username already exists
    const existingUser = this.users.find(user => user.username === newUser.username);
    if (existingUser) {
      this.errorMessage = 'Username already exists.';
      this.successMessage = '';
    } else {
      // Add the new user to the list of users
      this.users.push(newUser);
      this.successMessage = 'User created successfully!';
      this.errorMessage = '';
      this.newUsername = '';
      this.newPassword = '';
    }
  }
}

