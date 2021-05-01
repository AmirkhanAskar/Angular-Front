import { Component, OnInit } from '@angular/core';
import {CategoriesService} from '../categories.service';
import {Category} from '../category';
import {Books} from '../books';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
  genre: Category;
  books: Books[];
  id: number;

  constructor(private categoryService: CategoriesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = +params.get('id');
      this.getBooks(id);
    });
  }
  getBooks(id: number): void {
    this.categoryService.getBooksByCategory(id).subscribe((books) => {
      this.books  = books;
    });
  }
}
