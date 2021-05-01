import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../categories.service';
import {User} from '../User';
import {Location} from '@angular/common';
import {LoginComponent} from '../login/login.component';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registered: boolean;
  logged: boolean;
  constructor(private categoryService: CategoriesService, private location: Location, public app: AppComponent, ) {
  }

  ngOnInit(): void {
  }
  signUp(username: string, password: string, email: string): void {
    this.categoryService.signUp({username, password, email} as User).subscribe((data) => {
      localStorage.setItem('token', data.password);
      localStorage.setItem('username', username);
      this.logged = true;
      this.app.logged = true;
      this.categoryService.getUser(username)
        .subscribe(user => this.app.user = user);
      window.alert('Welcome, ' + username + '!');
      this.location.back();
      // this.username = '';
      // this.password = '';
    });
  }
}
