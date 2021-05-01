import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Authors} from './authors';
import {Books} from './books';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  BASE_URL = 'http://127.0.0.1:8000';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getAuthors(): Observable<Authors[]>{
    return this.http.get<Authors[]>(`${this.BASE_URL}/api/authors/`);
  }

  getAuthor(id: number): Observable<Authors>{
    return this.http.get<Authors>(`${this.BASE_URL}/api/authors/${id}/`);
  }

  addAuthor(author: Authors): Observable<Authors> {
    return this.http.post<Authors>(`${this.BASE_URL}/api/authors/`, author, this.httpOptions);
  }
  updateAuthor(author: Authors): Observable<Authors> {
    return this.http.put<Authors>(`${this.BASE_URL}/api/authors/${author.id}`, author, this.httpOptions);
  }

  deleteAuthor(id: number): Observable<any> {
    return this.http.delete<any>(`${this.BASE_URL}/api/authors/${id}`, this.httpOptions);
  }
  getBooksByAuthor(id: number): Observable<Books[]> {
    return this.http.get<Books[]>(`${this.BASE_URL}/api/authors/${id}/books`);
  }
}
