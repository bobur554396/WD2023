import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Category} from "./models";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  BASE_URL = 'http://127.0.0.1:8000'

  constructor(private client: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.client.get<Category[]>(
      `${this.BASE_URL}/api/categories/`
    )
  }

  createCategory(categoryName: string): Observable<Category> {
    return this.client.post<Category>(
      `${this.BASE_URL}/api/categories/`,
      {name: categoryName}
    )
  }

  deleteCategory(category_id: number): Observable<any> {
    return this.client.delete(
      `${this.BASE_URL}/api/categories/${category_id}/`
    )
  }
}
