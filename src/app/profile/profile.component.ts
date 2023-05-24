import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  newUsername!: string;
  private usernameSubscription!: Subscription;
  newUser: any;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.usernameSubscription = this.userService.getUsername().subscribe((newUsername: string) => {
      this.newUser.newUserName = newUsername;
      console.log(newUsername); // Check if the value is logged correctly
    });
  }

  ngOnDestroy() {
    this.usernameSubscription.unsubscribe();
  }
}
