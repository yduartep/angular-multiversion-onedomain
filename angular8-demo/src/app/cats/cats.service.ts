import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  constructor(private http: HttpClient) {
  }

  fetchCategories() {
    return this.http.get('https://api.thecatapi.com/v1/categories');
  }

  fetchByCategory(breed: number) {
    // it's not a real fetch by category. Just take the first image found
    const headers = new HttpHeaders().set('x-api-key', 'e72cbbe8-a46f-46dc-8503-a7dc6aea1e81');

    return this.http.get('https://api.thecatapi.com/v1/images/search?format=json&limit=1', {headers})
      .pipe(
        map((data: any[]) => {
          if (data && data.length > 0) {
            return data[0];
          } else {
            return {};
          }
        })
      );
  }
}
