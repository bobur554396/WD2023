import {Component, OnInit} from '@angular/core';
import {Category} from './models'
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
  logged: boolean = false;
  username: string = '';
  password: string = '';

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
      this.getCategories();
    }

  }

  getCategories() {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  login() {
    this.categoryService.login(this.username, this.password).subscribe((data) => {
      localStorage.setItem('token', data.token);
      this.logged = true;
      this.username = '';
      this.password = '';
      this.getCategories();
    });
  }

  logout() {
    localStorage.removeItem('token');
    // Request to the Django
    this.logged = false;
  }

  addCategory() {
    this.categoryService.createCategory(this.newCategory).subscribe((category) => {
      this.categories.push(category);
      this.newCategory = '';
    });
  }

  deleteCategory(category_id: number) {
    this.categoryService.deleteCategory(category_id).subscribe((data) => {
      this.categories = this.categories.filter((category) => category.id !== category_id);
    });
  }

}
