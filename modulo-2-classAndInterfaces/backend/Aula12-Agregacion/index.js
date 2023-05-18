"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = exports.ShopCart = void 0;
class ShopCart {
    constructor() {
        this.products = [];
    }
    insertProductToShopCart(...products) {
        for (const product of products) {
            this.products.push(product);
        }
    }
    productsQuantity() {
        return this.products.length;
    }
    totalValue() {
        return this.products.reduce((sum, product) => sum + product.price, 0);
    }
}
exports.ShopCart = ShopCart;
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
exports.Product = Product;
const shopCart1 = new ShopCart();
const product1 = new Product('Camiseta', 119.8);
const product2 = new Product('Bermuda', 189.9);
const product3 = new Product('Regata', 89.8);
shopCart1.insertProductToShopCart(product1, product2, product3);
console.log(shopCart1);
console.log(shopCart1.productsQuantity());
console.log(shopCart1.totalValue());
//# sourceMappingURL=index.js.map