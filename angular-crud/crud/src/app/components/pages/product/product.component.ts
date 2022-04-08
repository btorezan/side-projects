import { HeaderService } from "./../../../services/header.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent implements OnInit {
  constructor(private route: Router, headerService: HeaderService) {
    headerService.headerData = {
      title: "Produtos",
      icon: "storefront",
      routeUrl: "/products",
    };
  }

  ngOnInit(): void {}

  navigateToNewProduct(): void {
    this.route.navigate(["/products/new"]);
  }
}
