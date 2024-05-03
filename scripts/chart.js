let cartProducts = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

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
        type="number"
        name="quantity"
        min="1"
        id= "${product.id}"
        value="${product.quantity}"
        onchange = "changeQuantity(event)"
      />
    </div>

    <div class="">$ ${product.price}</div>
  </article>
    
    `;
}

function printProducts(arrayOfProducts, idSelector) {
  let productsTemplate = "";

  for (const element of arrayOfProducts) {
    productsTemplate = productsTemplate + createProductCard(element);
  }

  if (productsTemplate ===""){
    productsTemplate = `<p>No se encontraron productos en el carrito</p>`;
  } 

  const productsSelector = document.getElementById(idSelector);
  productsSelector.innerHTML = productsTemplate;
}

function createTotalTemplate(arrayOfProducts) {
  let total = 0;

  arrayOfProducts.forEach(
    (each) => (total = total + Number(each.price) * Number(each.quantity))
  );

  return `
    <h4 class="total-title"> Total a Pagar </h4>
    <p class="total-p">Subtotal $ ${total}</p>
    <p>Ingluye impuestos PAIS y percención AFIP</p>
    <button class="btn-primary" id="buy-button" type="button" onclick = "endPurchase()" >
      FINALIZA TU COMPRA
    </button>
    `;
}

function calculateTotal(){
  const totalPagar = createTotalTemplate(cartProducts);
  document.getElementById("subtotal-summary").innerHTML = totalPagar;
}

printProducts(cartProducts, "cart-list-products");

// const totalPagar = createTotalTemplate(cartProducts);

// document.getElementById("subtotal-summary").innerHTML = totalPagar;

calculateTotal();

function changeQuantity(event) {
  // Get the ID of the actual product
  const actualProductId = event.target.id;

  // Get the new quantity
  const newQuantity = Number(event.target.value);

  // Find the product in the array cartProducts
  const actualProduct = cartProducts.find(
    (product) => product.id === actualProductId
  );

  // Update the new quantity
  actualProduct.quantity = newQuantity;

  // console.log(JSON.stringify(cartProducts));

  // Update local Storage
  localStorage.setItem("cart", JSON.stringify(cartProducts));

  // Update total
  calculateTotal();
}
