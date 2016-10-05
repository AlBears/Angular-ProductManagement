import { Component, OnInit } from '@angular/core'
import { ProductService } from './product.service'
import { IProduct } from './product'
import { Router, ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router'
import { FORM_DIRECTIVES } from '@angular/forms'
import { ProductsFilterPipe } from './product-filter.pipe'
import { CartService } from '../cart/cart.service'

@Component({
selector: "shoes-products",
templateUrl: "app/products/product.component.html",
providers: [ProductService, CartService],
directives: [FORM_DIRECTIVES],
pipes: [ProductsFilterPipe]
})
export class ProductComponent implements OnInit{
    constructor(private productService:ProductService,
                private cartService: CartService,
                private router: Router,
                private route: ActivatedRoute){}

    products: IProduct[] = [];
    errorMessage: string;
    imageWidth: number=50;
    imageHeight: number=50;
    filterText: string = "";

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
    addToCart(product: IProduct):void {
        this.cartService.add(product);
        alert(product.name);
    }

}