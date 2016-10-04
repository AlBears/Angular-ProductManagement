import { provideRouter, RouterConfig } from '@angular/router'
import { ProductComponent } from './products/product.component'
import { ProductRoutes } from './products/product.routes'

export const routes: RouterConfig = [
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { path: 'home', redirectTo:'/products' },
    { path: 'products', component: ProductComponent },
    ...ProductRoutes
]

export const APP_ROUTER_PROVIDERS=[
    provideRouter(routes)
]
