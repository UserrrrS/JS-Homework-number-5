// Задание 1
let nums = [5,2,4];
let squares = [];

nums.splice(99, 0, 3);
for(let i = 0; i < nums.length; i++) {
  squares.push(nums[i] ** 2)
}

console.log(squares)
// Задание 2 

const list = [
  {product: "Apple", price: 25},
  {product: "Cherry", price: 32},
  {product: "Strawberry", price: 45}
 ]

let maxPrice = list[0].price;
let maxProduct = list[0].product;

for (let i =1; i < list.length; i++) {
  if (list[i].price > maxPrice) {
    maxPrice = list[i].price;
    maxProduct = list[i].product;
  }
}

console.log(maxProduct);

// Задание 3


let products = [
  "Яблоко", 
  "Молоко", 
  "Хлеб", 
  "Сыр", 
  "Картофель", 
  "Морковь", 
  "Бананы"
]

let basket = [];
const randomCount = Math.floor(Math.random() * (30 - 10 + 1)) + 10;

for (let i = 0; i < randomCount; i++) {
  const randomIndex = Math.floor(Math.random() * products.length);
  const randomProduct = products[randomIndex];
  const existingProduct = basket.find(item => item.product === randomProduct);
  if(!existingProduct) {
    const product = {
      product: randomProduct,
      price: Math.floor(Math.random() * (100 - 10 + 1)) + 10,
      cnt: 1
    };
    basket.push(product);
  } else {  existingProduct.cnt++;
    }
}

const totalPrice = basket.reduce((total, item) => total + (item.price * item.cnt), 0);

console.log(basket);
console.log("Сумма товаров в корзине:", totalPrice);
