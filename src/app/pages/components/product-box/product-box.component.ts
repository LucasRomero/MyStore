import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "src/app/models/product.model";

@Component({
  selector: "app-product-box",
  templateUrl: "./product-box.component.html",
})
export class ProductBoxComponent {
  @Input() FullWidthMode = false;
  product: Product | undefined = {
    id: 1,
    title: "Snicker",
    price: 150,
    category: "shoes",
    description: "Description",
    image: "https://via.placeholder.com/150",
  };

  @Output() addToCart = new EventEmitter<Product>();

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
