import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {AuthToken, Category} from "./models";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  BASE_URL = 'http://localhost:8000'

  constructor(private client: HttpClient) {
  }

  login(username: string, password: string): Observable<AuthToken> {
    return this.client.post<AuthToken>(
      `${this.BASE_URL}/api/login/`,
      {username, password}
    )
  }

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
