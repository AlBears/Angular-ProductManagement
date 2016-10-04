import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { ICategory } from './category'

@Injectable()
export class CategoryService{
    private categoriesUrl: string = "http://localhost:2403/categories";

constructor(private http: Http) {}

getCategories(): Observable<ICategory[]> {
    return this.http.get(this.categoriesUrl)
        .map((response: Response) => <ICategory[]>response.json())
        .do(data => console.log('Categories listed'));
    }
}