import {Component, OnInit} from '@angular/core';
import {Category} from "./models";
import {CategoryService} from "./category.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo-front';

  categories: Category[] = [];
  newCategory: string = '';

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  addCategory() {
    if (this.newCategory.length) {
      this.categoryService.createCategory(this.newCategory).subscribe((category) => {
        this.categories.push(category);
        this.newCategory = '';
      });
    }
  }


}
