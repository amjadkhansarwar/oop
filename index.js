class Product{
    constructor( name, price, salesRatio){
        this.name= name
        this.price = price
        this.salesRatio = salesRatio
    }
    getName(){
        return this.name
    }
    setName(name){
         this.name = name
    }
    getPrice(){
        return `${this.price}`
    }
    setPrice(newPrice){
        this.price = newPrice
    }
}
const product= new Product("naban", 70, 50)
console.log(product.getName())
product.setName("BnannanPaj")
console.log(product.getName())
console.log(product.getPrice())
product.setPrice(90)
console.log(product.getPrice())