"use strict";
var router_1 = require('@angular/router');
var product_component_1 = require('./products/product.component');
var product_routes_1 = require('./products/product.routes');
exports.routes = [
    { path: 'home', redirectTo: '/products' },
    { path: 'products', component: product_component_1.ProductComponent }
].concat(product_routes_1.ProductRoutes);
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map