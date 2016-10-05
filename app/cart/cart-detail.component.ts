import { Component, OnInit } from '@angular/core'
import { CartService } from './cart.service'
import { ICartLine } from './cartLine'

@Component({
    selector: "shoes-cartDetail",
    templateUrl: "app/cart/cart-detail.component.html",
    providers: [CartService]
})
export class CartDetailComponent implements OnInit{
    constructor(private cartService: CartService) {}
    cartLines: ICartLine[] = [];
    ngOnInit() {
        this.cartLines = this.cartService.list();
    }

}