"use strict";
var router_1 = require('@angular/router');
var product_component_1 = require('./products/product.component');
var product_routes_1 = require('./products/product.routes');
var cart_routes_1 = require('./cart/cart.routes');
exports.routes = [
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { path: 'home', redirectTo: '/products' },
    { path: 'products', component: product_component_1.ProductComponent }
].concat(product_routes_1.ProductRoutes, cart_routes_1.CartRoutes);
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map