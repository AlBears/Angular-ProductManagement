import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { IProduct } from './product'


@Injectable()
export class ProductService{
    private productsUrl: string = "http://localhost:2403/products";

constructor(private http: Http) {}

getProducts(): Observable<IProduct[]> {
    return this.http.get(this.productsUrl)
        .map((response: Response) => <IProduct[]>response.json())
        .do(data => console.log('Products listed'));
    }
getProductsByCategory(id: string): Observable<IProduct[]>{
    return this.http.get(this.productsUrl + "?categoryId=" + id)
        .map((response: Response) => <IProduct[]>response.json())
        .do(data => console.log('Products Listed'));
}
}