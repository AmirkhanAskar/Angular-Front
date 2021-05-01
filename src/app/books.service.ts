import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Authors} from './authors';
import {Books} from './books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  BASE_URL = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Books[]>{
    return this.http.get<Books[]>(`${this.BASE_URL}/api/books/`);
  }

  getBook(id: number): Observable<Books>{
    return this.http.get<Books>(`${this.BASE_URL}/api/books/${id}/`);
  }

  addAuthor(author: Authors): Observable<Authors> {
    return this.http.post<Authors>(`${this.BASE_URL}/api/authors/`, author);
  }

  updateAuthor(author: Authors): Observable<Authors> {
    return this.http.put<Authors>(`${this.BASE_URL}/api/authors/${author.id}`, author);
  }

  deleteAuthor(id: number): Observable<any> {
    return this.http.delete<any>(`${this.BASE_URL}/api/authors/${id}`);
  }
}
