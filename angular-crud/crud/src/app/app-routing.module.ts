import { ProductUpdateComponent } from "./components/pages/product/product-update/product-update.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./components/pages/home/home.component";
import { ProductComponent } from "./components/pages/product/product.component";
import { ProductCreateComponent } from "./components/pages/product/product-create/product-create.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "products",
    component: ProductComponent,
  },
  {
    path: "products/new",
    component: ProductCreateComponent,
  },
  {
    path: "products/update/:id",
    component: ProductUpdateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
