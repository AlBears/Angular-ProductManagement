import {Component} from '@angular/core'
import {HTTP_PROVIDERS} from '@angular/http'
import {ROUTER_DIRECTIVES} from '@angular/router'
import { ProductComponent } from './products/product.component'

@Component({
selector:"shoes-app",
templateUrl:"app/app.component.html",
directives: [ProductComponent],
providers: [HTTP_PROVIDERS]
})
export class AppComponent {
    constructor(){}
    pageTitle: string = "Shoes Land";
}