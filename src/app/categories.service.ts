import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from './сategory';
import {Books} from './books';
import {AuthToken} from './authtoken';
import {User} from './User';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  BASE_URL = 'http://127.0.0.1:8000';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(`${this.BASE_URL}/api/genres/`);
  }

  getCategory(id: number): Observable<Category>{
    return this.http.get<Category>(`${this.BASE_URL}/api/genres/${id}/`);
  }

  getBooksByCategory(id: number): Observable<Books[]> {
    return this.http.get<Books[]>(`${this.BASE_URL}/api/genres/${id}/`);
  }
  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(`${this.BASE_URL}/api/genres/`, category, this.httpOptions);
  }

  updateCategory(category: Category, id: number): Observable<Category> {
    return this.http.put<Category>(`${this.BASE_URL}/api/genres/${category.id}/`, category, this.httpOptions);
  }

  deleteCategory(id: number): Observable<any> {
    return this.http.delete<any>(`${this.BASE_URL}/api/genres/${id}/`, this.httpOptions);
  }
  login(username, password): Observable<AuthToken> {
    return this.http.post<AuthToken>(`${this.BASE_URL}/api/login/`, {
      username,
      password
    });
  }

  getUser(username): Observable<User> {
    return this.http.get<User>(`${this.BASE_URL}/api/users/${username}/`);
  }

  signUp(user: User): Observable<User> {
    return this.http.post<User>(`${this.BASE_URL}/api/signUp/`, user, this.httpOptions);
  }


}
