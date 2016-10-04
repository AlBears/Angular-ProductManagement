import {Component} from '@angular/core'
import {HTTP_PROVIDERS} from '@angular/http'
import {ROUTER_DIRECTIVES} from '@angular/router'
import { ProductComponent } from './products/product.component'
import { CategoryComponent } from './categories/category.component'

@Component({
selector:"shoes-app",
templateUrl:"app/app.component.html",
directives: [ProductComponent, CategoryComponent],
providers: [HTTP_PROVIDERS]
})
export class AppComponent {
    constructor(){}
    pageTitle: string = "Shoes Land";
}