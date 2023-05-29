import { getStorecart } from "../Utilis/fakeDb"



   //const initialCart = []

    export const ProductAndCarddata = async () =>{
        const productData = await fetch('products.json')
        const products = await productData.json()
        const savedCart = getStorecart()
        let cartArray = []
        for (const id in savedCart) {
            const foundProduct = products.find(product => product.id === id)
            if (foundProduct) {
              const quantity = savedCart[id]
              foundProduct.quantity = quantity
              cartArray.push(foundProduct)
            }
          }
          return {cartArray ,products}
        }
    
      
