import { Component } from '@angular/core';
import Product from '../core/product';

import Category from '../core/category';
const products = [
  new Product(
    1,
    'Product 1',
    100,
    0,
    new Category(1, 'Category 1', 'Category 1 Description')
  ),
  new Product(
    2,
    'Product 2',
    200,
    4,
    new Category(2, 'Category 2', 'Category 2 Description')
  ),
  new Product(
    3,
    'Product 3',
    300,
    30,
    new Category(3, 'Category 3', 'Category 3 Description')
  ),
];
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  title: string = 'Product List';
  color: string = 'red';
  products: Product[] = products;
  // isBuyButtonDisabled(quantity: number): boolean {
  //   return quantity === 0;
  // }
  buy(product: Product): void {
    product.quantity--;
  }
  deleteProduct(productInput: Product): void {
    this.products = this.products.filter((product) => product.id !== productInput.id);
  }

  likeProduct(product: Product): void {
    product.likes++;
  }
}
