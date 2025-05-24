const products = [
    {id:1, name:'samsung', price:39987},
    {id:1, name:'nokia', price:89957},
    {id:1, name:'walton phone', price:89987},
    {id:1, name:'iphone', price:59987},
    {id:1, name:'samsung phone', price:89987},
    {id:1, name:'samsung laptop', price:89987},
    {id:1, name:'samsung TV', price:89987}
    
]

function matchProduct(products,search){
    const matched = []
  for(const product of products){
    console.log(product)
    if(product.name.toLowerCase().includes(search.toLowerCase())){
        matched.push(product)
    }
}
return matched;
}
console.log(matchProduct(products,'Laptop'))