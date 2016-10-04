import { Component, OnInit } from '@angular/core'
import { CategoryService } from './category.service'
import { ICategory } from './category'

@Component({
selector: "shoes-categories",
templateUrl: "app/categories/category.component.html",
providers: [CategoryService]
})
export class CategoryComponent implements OnInit{

    constructor(private categoryService:CategoryService){}
    title:string="Categories";
    categories:ICategory[];
    errorMessage:string;

    ngOnInit(): void{
        this.categoryService.getCategories().
            subscribe(categories => this.categories = categories,
            error => this.errorMessage = <any>error);
    }

}