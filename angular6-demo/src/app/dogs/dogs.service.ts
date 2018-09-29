import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  constructor(private http: HttpClient) {
  }

  fetchCategories(): Observable<any[]> {
    return this.http.get('https://dog.ceo/api/breeds/list/all')
      .pipe(
        map(data => {
          if (data['status'] === 'success') {
            const values = Object.keys(data['message']);

            return values.map((name, i) => {
              return {id: i + 1, name: name};
            });
          } else {
            return [];
          }
        })
      );
  }

  fetchByCategory(breed: string): Observable<string> {
    return this.http.get(`https://dog.ceo/api/breed/${breed}/images/random`).pipe(
      map(data => {
        if (data['status'] === 'success') {
          return data['message'];
        } else {
          return null;
        }
      })
    );
  }
}
