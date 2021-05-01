import { Component, OnInit } from '@angular/core';
import {Books} from '../books';
import {AuthorsService} from '../authors.service';
import {CategoriesService} from '../categories.service';

@Component({
  selector: 'app-author-books',
  templateUrl: './author-books.component.html',
  styleUrls: ['./author-books.component.css']
})
export class AuthorBooksComponent implements OnInit {
  books: Books[] = [];
  constructor(private categoryService: CategoriesService) { }

  ngOnInit(): void {
  }
  // getBooks(){
  //   this.categoryService.getBooksByCategory(id).subscribe((books) => {
  //     this.books = books;
  //   });
  // }
}
