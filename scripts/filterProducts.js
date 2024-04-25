
let filteredProducts = [];


function captureText(event){
//  console.log(event);
//  console.log(event.srcElement);
//  console.log(event.srcElement.placeholder);
// console.log(event.srcElement.value);

 console.log(event.target.value);

 let valorCapturado = event.srcElement.value; 
 
 filteredProducts = products.filter( product => {
    let resultado = product.name.includes(valorCapturado);
    // console.log(resultado);
    return resultado;
 }
 );  

//  console.log("Filtered:");
//  console.log(filteredProducts);

 if (filteredProducts.length == 0){
    printCards(products, "products");
 }else{
    printCards(filteredProducts, "products");
 }

}

const searchSelector = document.getElementById("search");
searchSelector.addEventListener("keyup", event => captureText (event));

