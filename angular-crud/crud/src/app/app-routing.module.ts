import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./components/pages/home/home.component";
import { ProductComponent } from "./components/pages/product/product.component";
import { ProductCreateComponent } from "./components/pages/product/product-create/product-create.component";
import { ProductUpdateComponent } from "./components/pages/product/product-update/product-update.component";
import { ProductDeleteComponent } from "./components/pages/product/product-delete/product-delete.component";

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
  {
    path: "products/delete/:id",
    component: ProductDeleteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
