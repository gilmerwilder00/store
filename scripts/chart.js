const cartProducts = localStorage.getItem("cart")  ? JSON.parse(localStorage.getItem("cart"))  : [];

function createProductCard(product) {
  return `
    <article class="cart-product-item">
    <img
      class="product-cart-img"
      src="${product.image}"
      alt="Macbook Pro"
    />

    <div class="product-cart-description">
      <span class="product-cart-title"
        >${product.title}</span
      >
      <span class="product-cart-description">${product.color}</span>
      <input
        class="product-cart-quantity"
        type="text"
        value=" ${product.quantity}"
        disabled
      />
    </div>

    <div class="">$750.000</div>
  </article>
    
    `;
}



function createTotalTemplate(arrayOfProducts) {
  let total = 0;
  
  arrayOfProducts.forEach(
    (each) => (total = total + Number(each.price) * Number(each.quantity))
  );

//   for (const item of arrayOfProducts) {
//     total = total + Number(item.price) * Number(item.quantity);
//   }

  console.log(total);

  return `
    <h4 class="total-title"> Total a Pagar </h4>
    <p class="total-p">Subtotal $ ${total}</p>
    `;
}




function printProducts(arrayOfProducts, idSelector) {

  let productsTemplate = "";

  for (const element of arrayOfProducts) {
    productsTemplate = productsTemplate + createProductCard(element);
  }

  const productsSelector = document.getElementById(idSelector);
  productsSelector.innerHTML = productsTemplate;
}

 printProducts(cartProducts, "cart-list-products");

const totalPagar = createTotalTemplate(cartProducts);

document.getElementById("subtotal-summary").innerHTML = totalPagar;
