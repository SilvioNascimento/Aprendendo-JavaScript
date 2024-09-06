let numbers = [10, 4, 8, 5, -4];
const allPositive = numbers.every(function(number, index, array) {
    console.log(`Index: ${index}; Número: ${number}; Array atual: ${array}`)
    return number > 0;
})

console.log(allPositive)


const stockLimit = {
    minStock: 10
  };
  
  const products = [
    { name: "Notebook", stock: 20 },
    { name: "Smartphone", stock: 15 },
    { name: "Tablet", stock: 5 }
  ];
  
  const allInStock = products.every(function(product) {
    return product.stock >= this.minStock;
  }, stockLimit);
  
  console.log(allInStock); // false
  