import {Component} from '@angular/core'
import {HTTP_PROVIDERS} from '@angular/http'
import {ROUTER_DIRECTIVES} from '@angular/router'

@Component({
selector:"shoes-app",
templateUrl:"app/app.component.html"
})
export class AppComponent {
    constructor(){}
    pageTitle: string = "Shoes Land";
}