"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./components/pages/home/home.component");
var product_component_1 = require("./components/pages/product/product.component");
var product_create_component_1 = require("./components/pages/product/product-create/product-create.component");
var product_update_component_1 = require("./components/pages/product/product-update/product-update.component");
var product_delete_component_1 = require("./components/pages/product/product-delete/product-delete.component");
var routes = [
    {
        path: "",
        component: home_component_1.HomeComponent
    },
    {
        path: "products",
        component: product_component_1.ProductComponent
    },
    {
        path: "products/new",
        component: product_create_component_1.ProductCreateComponent
    },
    {
        path: "products/update/:id",
        component: product_update_component_1.ProductUpdateComponent
    },
    {
        path: "products/delete/:id",
        component: product_delete_component_1.ProductDeleteComponent
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
