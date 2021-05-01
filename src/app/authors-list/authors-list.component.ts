import { Component, OnInit } from '@angular/core';
import {Authors} from '../authors';
import {AuthorsService} from '../authors.service';
import { CategoriesService} from '../categories.service';

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.css']
})
export class AuthorsListComponent implements OnInit {
  authors: Authors[] = [];

  constructor(private authorsService: AuthorsService) {}

  ngOnInit(): void {
    this.getAuthors();
  }

  getAuthors(): void {
    this.authorsService.getAuthors().subscribe((authors) => {
      this.authors = authors;
    });
  }


  // deleteAuthor(id: number) {
  //   this.authors = this.authors.filter((x) => x.id !== id);
  //   this.authorsService.deletePost(id).subscribe();
  // }

}
