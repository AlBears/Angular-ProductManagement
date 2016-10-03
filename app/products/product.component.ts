import { Component, OnInit } from '@angular/core'
import { ProductService } from './product.service'
import { IProduct } from './product'

@Component({
selector: "shoes-products",
templateUrl: "app/products/product.component.html",
providers: [ProductService]
})
export class ProductComponent implements OnInit{
    constructor(private productService:ProductService){

    }
    products: IProduct[];
    errorMessage: string;
    imageWidth:number=50;
    imageHeight:number=50;

    ngOnInit(): void{
        this.productService.getProducts().
            subscribe(products => this.products = products,
            error => this.errorMessage = <any>error);
    }

}