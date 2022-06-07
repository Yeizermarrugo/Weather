const store = () => {
    const newProduct = []
    return {
      addProduct(product){
        newProduct.push(product)
      },
      
      removeProduct(product){
        const pivot = newProduct.filter(p => p !== product)
        newProduct.length = 0
        newProduct.push(...pivot)
      },
      listProducts(){
        return newProduct
      }
    }
  }

//   const myStore = store();

// myStore.addProduct("t-shirts");
// myStore.addProduct("cookies");
// myStore.addProduct("Shampoo");
// console.log(myStore.listProducts())

const myStore = store();

myStore.addProduct("phones");
myStore.addProduct("cereal");
myStore.removeProduct("phones");
myStore.addProduct("flour");
console.log(myStore.listProducts())