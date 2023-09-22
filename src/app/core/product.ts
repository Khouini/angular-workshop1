import Category from './category';
export default class Product {
  id?: number;
  name?: string;
  price?: number;
  category?: Category;
  quantity: number = 0;
  likes: number = 0;

  constructor(
    id: number,
    name: string,
    price: number,
    quantity: number,
    category: Category
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
  }
}
