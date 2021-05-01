import { Component, OnInit } from '@angular/core';
import {Authors} from '../authors';
import {AuthorsService} from '../authors.service';
import {ActivatedRoute} from '@angular/router';
import {Books} from '../books';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit {
  author: Authors;
  books: Books[];

  constructor(private route: ActivatedRoute, private authorService: AuthorsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = +params.get('id');
      this.getAuthor(id);
      this.getBooks(id);
    });
  }

  getAuthor(id: number): void {
    this.authorService.getAuthor(id).subscribe((author) => {
      this.author = author;
    });
  }
  getBooks(id: number): void {
    this.authorService.getBooksByAuthor(id).subscribe((books) => {
      this.books  = books;
    });
  }

  // updateAuthor(): void {
  //   this.authorService.updateAuthor(this.author).subscribe((author) => {
  //     this.author.name = this.name;
  //   });

  }

