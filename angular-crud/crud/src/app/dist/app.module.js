"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var animations_1 = require("@angular/platform-browser/animations");
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var toolbar_1 = require("@angular/material/toolbar");
var sidenav_1 = require("@angular/material/sidenav");
var list_1 = require("@angular/material/list");
var card_1 = require("@angular/material/card");
var button_1 = require("@angular/material/button");
var snack_bar_1 = require("@angular/material/snack-bar");
var form_field_1 = require("@angular/material/form-field");
var input_1 = require("@angular/material/input");
var table_1 = require("@angular/material/table");
var footer_component_1 = require("./components/template/footer/footer.component");
var header_component_1 = require("./components/template/header/header.component");
var nav_component_1 = require("./components/template/nav/nav.component");
var home_component_1 = require("./components/pages/home/home.component");
var product_component_1 = require("./components/pages/product/product.component");
var product_create_component_1 = require("./components/pages/product/product-create/product-create.component");
var red_directive_1 = require("./directives/red.directive");
var product_read_component_1 = require("./components/pages/product/product-read/product-read.component");
var pt_1 = require("@angular/common/locales/pt");
var common_1 = require("@angular/common");
var product_update_component_1 = require("./components/pages/product/product-update/product-update.component");
common_1.registerLocaleData(pt_1["default"]);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                nav_component_1.NavComponent,
                home_component_1.HomeComponent,
                product_component_1.ProductComponent,
                product_create_component_1.ProductCreateComponent,
                product_read_component_1.ProductReadComponent,
                product_update_component_1.ProductUpdateComponent,
                red_directive_1.RedDirective,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                toolbar_1.MatToolbarModule,
                sidenav_1.MatSidenavModule,
                list_1.MatListModule,
                card_1.MatCardModule,
                button_1.MatButtonModule,
                snack_bar_1.MatSnackBarModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                form_field_1.MatFormFieldModule,
                input_1.MatInputModule,
                table_1.MatTableModule,
            ],
            providers: [
                {
                    provide: core_1.LOCALE_ID,
                    useValue: "pt-BR"
                },
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
