import { Component, OnInit } from '@angular/core'
import { ProductService } from './product.service'
import { IProduct } from './product'
import { Router, ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router'

@Component({
selector: "shoes-products",
templateUrl: "app/products/product.component.html",
providers: [ProductService]
})
export class ProductComponent implements OnInit{
    constructor(private productService:ProductService,
                private router: Router,
                private route: ActivatedRoute){}

    products: IProduct[];
    errorMessage: string;
    imageWidth:number=50;
    imageHeight:number=50;

    ngOnInit(): void{
        this.route.params.subscribe(
           params => {
               let id = params['id'];
               if (id){
                   this.productService.getProductsByCategory(id).
                   subscribe(products => this.products = products,
                   error => this.errorMessage = <any>error);
               } else {
                    this.productService.getProducts().
                    subscribe(products => this.products = products,
                    error => this.errorMessage = <any>error);
               }
           } 
        )
        
    }

}