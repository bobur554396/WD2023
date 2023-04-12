import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Category} from "./models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  BASE_URL = 'http://localhost:8000';

  constructor(private client: HttpClient) {
  }

  getCategories(): Observable<Category[]> {
    return this.client.get<Category[]>(`${this.BASE_URL}/api/categories/`);
  }

  createCategory(categoryName: string): Observable<Category> {
    return this.client.post<Category>(
      `${this.BASE_URL}/api/categories/`,
      {'name': categoryName}
    )
  }


}
