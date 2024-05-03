
// const buySelector = document.getElementById("buy-button");
// console.log(buySelector);



function endPurchase(){
    // Clear cartProducts
    cartProducts = [];

    // Clear cart from localStorage
    localStorage.clear();

    // update list of products (clear)
    printProducts(cartProducts, "cart-list-products");

    // Calculate total
    calculateTotal();

}

// buySelector.addEventListener("click", endPurchase ); 
