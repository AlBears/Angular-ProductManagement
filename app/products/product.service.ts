import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxrj/add/operator/do';
import 'rxrj/add/operator/catch';
import 'rxrj/add/operator/map';
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
}