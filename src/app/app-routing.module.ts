import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MainComponent} from './main/main.component';
import {AuthorsListComponent} from './authors-list/authors-list.component';
import {AuthorDetailComponent} from './author-detail/author-detail.component';
import {CategoryComponent} from './category/category.component';
import {CategoryDetailComponent} from './category-detail/category-detail.component';
import {AuthorBooksComponent} from './author-books/author-books.component';
import {RegisterComponent} from './register/register.component';
import {BooksListComponent} from './books-list/books-list.component';

const routes: Routes = [
  {path: 'home', component: MainComponent},
  {path: 'login', component: LoginComponent},
  {path: 'authors', component: AuthorsListComponent},
  {path: 'authors/:id', component: AuthorDetailComponent},
  {path: 'author/:id/books', component: AuthorBooksComponent},
  {path: 'genres', component: CategoryComponent},
  {path: 'genres/:id', component: CategoryDetailComponent},
  {path: 'books', component: BooksListComponent},
  {path: 'signUp', component: RegisterComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
