"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var product_service_1 = require('./product.service');
var router_1 = require('@angular/router');
var ProductComponent = (function () {
    function ProductComponent(productService, router, route) {
        this.productService = productService;
        this.router = router;
        this.route = route;
        this.imageWidth = 50;
        this.imageHeight = 50;
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            if (id) {
                _this.productService.getProductsByCategory(id).
                    subscribe(function (products) { return _this.products = products; }, function (error) { return _this.errorMessage = error; });
            }
            else {
                _this.productService.getProducts().
                    subscribe(function (products) { return _this.products = products; }, function (error) { return _this.errorMessage = error; });
            }
        });
    };
    ProductComponent = __decorate([
        core_1.Component({
            selector: "shoes-products",
            templateUrl: "app/products/product.component.html",
            providers: [product_service_1.ProductService]
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService, router_1.Router, router_1.ActivatedRoute])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.component.js.map