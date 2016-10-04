import { RouterConfig } from '@angular/router'
import { ProductComponent } from './product.component'

export const ProductRoutes: RouterConfig = [
    {
        path: 'products/category/:id', component: ProductComponent
    }
];