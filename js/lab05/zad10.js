const form =document.getElementById('form')
const a = document.getElementById('product1')
const b = document.getElementById('product2')
const wynik = document.getElementById('wynik')


class Product {
    constructor(name,price) {
        this.name = name
        this.price = price
    }
}

class ShoppingCart{
    constructor() {
        this.items = []
        this.sum = 0
    }

    addProduct(product){
        return this.items.push(product)
        
    }
    
    totalCost(){
        this.sum=0
        for (let ele of this.items){
            this.sum += ele.price
        }
        // console.log(`Łączna cena: ${this.sum}`);
        return this.sum
        
    }
}

 
form.addEventListener('submit', e=>{
    e.preventDefault()


    const koszyk = new ShoppingCart()

    if (a.checked) {
        const product1 = new Product('jeden',1)
        koszyk.addProduct(product1)}
    if (b.checked) {
        const product2 = new Product('dwa',2)
        koszyk.addProduct(product2)}
    

    // console.log(koszyk);

    

    wynik.innerHTML =`towj total:${koszyk.totalCost()}`

})


