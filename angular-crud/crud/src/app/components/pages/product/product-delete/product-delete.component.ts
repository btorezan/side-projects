import { Product } from "./../product.model";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "./../../../../services/product.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-product-delete",
  templateUrl: "./product-delete.component.html",
  styleUrls: ["./product-delete.component.css"],
})
export class ProductDeleteComponent implements OnInit {
  product!: Product;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.productService.readById(id!).subscribe((product) => {
      this.product = product;
    });
  }

  deleteProduct(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.productService.delete(id!).subscribe(() => {
      this.productService.showMessage("Produto Removido com Sucesso!");
      this.router.navigate(["/products"]);
    });
  }
  cancel() {}
}
