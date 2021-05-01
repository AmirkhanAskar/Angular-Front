import {Component, OnInit} from '@angular/core';
import {CategoriesService} from './categories.service';
import {User} from './User';
import {LoginComponent} from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'project';
  logged = false;
  user: User;
  constructor(private categoryService: CategoriesService) {}

  ngOnInit(): void {
    if (localStorage.getItem('username') != null) {
      const user: string = localStorage.getItem('username');
      this.categoryService.getUser(user)
        .subscribe(us => {
          this.user = us;
        });
    }
  }
  searchAuthor(): void{
    this.logged = false;
  };
}
