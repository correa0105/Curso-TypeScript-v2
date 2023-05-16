export class ShopCart {
  private readonly products: Product[] = [];

  public insertProductToShopCart(...products: Product[]) {
    for (const product of products) {
      this.products.push(product);
    }
  }

  public productsQuantity(): number {
    return this.products.length;
  }

  public totalValue(): number {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }
}

export class Product {
  constructor(public name: string, public price: number) {}
}

const shopCart1 = new ShopCart();

const product1 = new Product('Camiseta', 119.8);
const product2 = new Product('Bermuda', 189.9);
const product3 = new Product('Regata', 89.8);

shopCart1.insertProductToShopCart(product1, product2, product3);

console.log(shopCart1);
console.log(shopCart1.productsQuantity());
console.log(shopCart1.totalValue());
